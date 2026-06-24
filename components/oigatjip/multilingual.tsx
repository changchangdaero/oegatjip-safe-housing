'use client'

import { useState } from 'react'
import { AlertTriangle, FileText, Languages } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const LANGS = ['English', '中文', 'Tiếng Việt', '日本語', '한국어']

const SUMMARY: Record<string, { summary: string; warning: string }> = {
  English: {
    summary:
      'We summarize deposit, monthly rent, payment date, special terms, and required documents in simple language.',
    warning: 'Some sentences in the special terms clause need additional review.',
  },
  中文: {
    summary: '我们用简单的语言总结押金、月租、付款日期、特别条款和所需文件。',
    warning: '特别条款中有部分内容需要进一步确认。',
  },
  'Tiếng Việt': {
    summary:
      'Chúng tôi tóm tắt tiền đặt cọc, tiền thuê hàng tháng, ngày thanh toán, điều khoản đặc biệt và giấy tờ cần thiết bằng ngôn ngữ dễ hiểu.',
    warning: 'Một số câu trong điều khoản đặc biệt cần được xem xét thêm.',
  },
  日本語: {
    summary:
      '保証金、家賃、支払日、特約、必要書類を分かりやすい言葉で要約します。',
    warning: '特約条項の一部に追加確認が必要な文章があります。',
  },
  한국어: {
    summary: '보증금, 월세, 납부일, 특약, 필요서류를 쉬운 언어로 요약합니다.',
    warning: '특약 조항 중 추가 확인이 필요한 문장이 발견되었습니다.',
  },
}

export function Multilingual() {
  const [lang, setLang] = useState('Tiếng Việt')
  const data = SUMMARY[lang]

  return (
    <section className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <span className="text-sm font-bold uppercase tracking-wide text-[var(--color-sky)]">
            다국어 지원
          </span>
          <h2 className="mt-2 text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
            한국어가 어려워도, 계약은 이해할 수 있게
          </h2>
          <p className="mt-3 max-w-lg text-pretty leading-relaxed text-navy-foreground/75">
            외같집은 영어, 중국어, 베트남어, 일본어 등 외국인 사용자를 위한 다국어
            계약 요약과 위험 설명을 제공합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                  lang === l
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-white/10 text-navy-foreground/80 hover:bg-white/20',
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-sky)]">
            <Languages className="h-4 w-4" />
            Selected Language: {lang}
          </div>
          <div className="mt-4 rounded-2xl bg-card p-4 text-card-foreground">
            <div className="flex items-center gap-2 text-sm font-bold">
              <FileText className="h-4 w-4 text-primary" />
              Contract Summary
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {data.summary}
            </p>
          </div>
          <div className="mt-3 rounded-2xl border border-[var(--color-warning)]/30 bg-[color-mix(in_oklch,var(--color-warning),white_85%)] p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-warning)]">
              <AlertTriangle className="h-4 w-4" />
              Risk Warning
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              {data.warning}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
