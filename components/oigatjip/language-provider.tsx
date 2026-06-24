'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_OPTIONS,
  type LanguageCode,
  translateText,
} from '@/lib/i18n'

type LanguageContextValue = {
  language: LanguageCode
  setLanguage: (language: LanguageCode) => void
  t: (text: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const LANGUAGE_STORAGE_KEY = 'oigatjip-language'
const textOriginals = new WeakMap<Text, string>()
const attrOriginals = new WeakMap<Element, Partial<Record<string, string>>>()

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(DEFAULT_LANGUAGE)

  useEffect(() => {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (isLanguageCode(saved)) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = useCallback((nextLanguage: LanguageCode) => {
    setLanguageState(nextLanguage)
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage)
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const select = document.querySelector<HTMLSelectElement>(
        '[data-language-select]',
      )
      if (isLanguageCode(select?.value) && select.value !== language) {
        setLanguage(select.value)
      }
    }, 250)

    return () => window.clearInterval(intervalId)
  }, [language, setLanguage])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (text: string) => translateText(text, language),
    }),
    [language, setLanguage],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
      <TranslationApplier language={language} />
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

function TranslationApplier({ language }: { language: LanguageCode }) {
  useEffect(() => {
    const htmlLang =
      LANGUAGE_OPTIONS.find((item) => item.value === language)?.htmlLang ?? 'ko'
    document.documentElement.lang = htmlLang

    const apply = () => applyTranslations(document.body, language)
    apply()

    const observer = new MutationObserver(() => apply())
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['placeholder', 'aria-label', 'alt', 'title'],
    })

    return () => observer.disconnect()
  }, [language])

  return null
}

function applyTranslations(root: HTMLElement, language: LanguageCode) {
  translateTextNodes(root, language)
  translateAttributes(root, language)
}

function translateTextNodes(root: HTMLElement, language: LanguageCode) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  const nodes: Text[] = []

  while (walker.nextNode()) {
    const node = walker.currentNode as Text
    if (!node.parentElement || shouldSkip(node.parentElement)) continue
    const trimmed = node.nodeValue?.trim()
    if (!trimmed) continue
    nodes.push(node)
  }

  nodes.forEach((node) => {
    const original = getOriginal(node)
    if (!original) return
    const translated = translateText(original, language)
    if (node.nodeValue?.trim() !== translated) {
      node.nodeValue = replaceKeepingOuterSpace(node.nodeValue ?? '', translated)
    }
  })
}

function translateAttributes(root: HTMLElement, language: LanguageCode) {
  const attrs = ['placeholder', 'aria-label', 'alt', 'title'] as const
  const elements = root.querySelectorAll<HTMLElement>(
    attrs.map((attr) => `[${attr}]`).join(','),
  )

  elements.forEach((element) => {
    if (shouldSkip(element)) return
    attrs.forEach((attr) => {
      const current = element.getAttribute(attr)
      if (!current) return
      const stored = attrOriginals.get(element) ?? {}
      const original = stored[attr] ?? current
      attrOriginals.set(element, { ...stored, [attr]: original })
      const translated = translateText(original, language)
      if (current !== translated) {
        element.setAttribute(attr, translated)
      }
    })
  })
}

function getOriginal(node: Text) {
  const original = textOriginals.get(node)
  if (original) return original

  const current = node.nodeValue?.trim()
  if (!current) return null

  textOriginals.set(node, current)
  return current
}

function replaceKeepingOuterSpace(current: string, translated: string) {
  const prefix = current.match(/^\s*/)?.[0] ?? ''
  const suffix = current.match(/\s*$/)?.[0] ?? ''
  return `${prefix}${translated}${suffix}`
}

function shouldSkip(element: Element) {
  return Boolean(element.closest('script, style, svg, [data-i18n-skip]'))
}

function isLanguageCode(value: string | null): value is LanguageCode {
  return LANGUAGE_OPTIONS.some((item) => item.value === value)
}
