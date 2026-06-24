import { LANGUAGES, translations } from '@/lib/i18n'

export function LanguageScript() {
  const script = `
(() => {
  const STORAGE_KEY = 'oigatjip-language';
  const languages = ${JSON.stringify(LANGUAGES)};
  const translations = ${JSON.stringify(translations)};
  const textOriginals = new WeakMap();
  const attrNames = ['placeholder', 'aria-label', 'alt', 'title'];

  function isLanguage(value) {
    return languages.some((item) => item.code === value);
  }

  function translate(text, language) {
    if (language === 'ko') return text;
    return (translations[language] && translations[language][text]) || text;
  }

  function getLanguage() {
    const select = document.querySelector('[data-language-select]');
    const selected = select && select.value;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
    if (isLanguage(selected)) return selected;
    return 'ko';
  }

  function setLanguage(language) {
    if (!isLanguage(language)) return;
    window.localStorage.setItem(STORAGE_KEY, language);
    const selectedLanguage = languages.find((item) => item.code === language);
    document.documentElement.lang = (selectedLanguage && selectedLanguage.htmlLang) || 'ko';
    document.querySelectorAll('[data-language-select]').forEach((select) => {
      if (select.value !== language) select.value = language;
    });
    applyTranslations(language);
  }

  function shouldSkip(element) {
    return Boolean(element.closest('script, style, svg, [data-i18n-skip]'));
  }

  function replaceKeepingOuterSpace(current, translated) {
    const prefix = (current.match(/^\\s*/) || [''])[0];
    const suffix = (current.match(/\\s*$/) || [''])[0];
    return prefix + translated + suffix;
  }

  function applyTranslations(language) {
    if (!document.body) return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.parentElement || shouldSkip(node.parentElement)) continue;
      const trimmed = node.nodeValue && node.nodeValue.trim();
      if (!trimmed) continue;
      nodes.push(node);
    }

    nodes.forEach((node) => {
      const original = textOriginals.get(node) || (node.nodeValue && node.nodeValue.trim());
      if (!original) return;
      textOriginals.set(node, original);
      const translated = translate(original, language);
      if ((node.nodeValue || '').trim() !== translated) {
        node.nodeValue = replaceKeepingOuterSpace(node.nodeValue || '', translated);
      }
    });

    const selector = attrNames.map((attr) => '[' + attr + ']').join(',');
    document.querySelectorAll(selector).forEach((element) => {
      if (shouldSkip(element)) return;
      attrNames.forEach((attr) => {
        const current = element.getAttribute(attr);
        if (!current) return;
        const originalKey = 'data-i18n-original-' + attr;
        const original = element.getAttribute(originalKey) || current;
        element.setAttribute(originalKey, original);
        const translated = translate(original, language);
        if (current !== translated) element.setAttribute(attr, translated);
      });
    });
  }

  function boot() {
    setLanguage(getLanguage());
    document.addEventListener('change', (event) => {
      if (event.target && event.target.matches('[data-language-select]')) {
        setLanguage(event.target.value);
      }
    });
    document.addEventListener('input', (event) => {
      if (event.target && event.target.matches('[data-language-select]')) {
        setLanguage(event.target.value);
      }
    });
    let previous = getLanguage();
    window.setInterval(() => {
      const current = getLanguage();
      if (current !== previous) {
        previous = current;
        setLanguage(current);
      }
    }, 250);
    const observer = new MutationObserver(() => applyTranslations(getLanguage()));
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: attrNames,
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
`

  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
