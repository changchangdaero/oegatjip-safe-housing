'use client'

import { type ChangeEvent, useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Globe, Menu, X } from 'lucide-react'
import { Logo } from './logo'
import { cn } from '@/lib/utils'
import { LANGUAGE_OPTIONS } from '@/lib/i18n'
import { useLanguage } from './language-provider'

const NAV = [
  { label: '서비스 소개', href: '/#features' },
  { label: '매물 찾기', href: '/search' },
  { label: '안심 분석', href: '/analysis' },
  { label: '로드맵', href: '/roadmap' },
  { label: '커뮤니티', href: '/#community' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as typeof language)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-[0_10px_40px_oklch(0.2_0.075_258_/_0.05)]">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="외같집 홈">
          <Logo />
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-navy/75 transition-colors hover:bg-secondary hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* language dropdown */}
          <div className="relative flex items-center rounded-full border border-border bg-white px-3 py-2 text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-secondary">
            <Globe className="pointer-events-none h-4 w-4 text-primary" />
            <select
              value={language}
              onChange={handleLanguageChange}
              onInput={handleLanguageChange}
              className="ml-1.5 appearance-none bg-transparent pr-5 text-sm font-semibold text-navy outline-none"
              aria-label="언어 선택"
              data-language-select
            >
              {LANGUAGE_OPTIONS.map((item) => (
                <option key={item.value} value={item.value} data-i18n-skip>
                  {item.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-muted-foreground" />
          </div>

          {/* auth buttons (desktop) */}
          <Link
            href="/my"
            className="hidden rounded-full px-3.5 py-2 text-sm font-semibold text-navy transition-colors hover:bg-secondary sm:inline-flex"
          >
            로그인
          </Link>
          <Link
            href="/my"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_12px_28px_oklch(0.56_0.2_255_/_0.25)] transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            회원가입
          </Link>

          {/* mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-navy shadow-sm lg:hidden"
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* mobile menu panel */}
      <div
        className={cn(
          'overflow-hidden border-t border-border bg-white transition-[max-height] duration-300 lg:hidden',
          menuOpen ? 'max-h-96' : 'max-h-0',
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground/90 hover:bg-secondary"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Link
              href="/my"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg border border-border px-4 py-3 text-center text-sm font-semibold text-foreground"
            >
              로그인
            </Link>
            <Link
              href="/my"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              회원가입
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
