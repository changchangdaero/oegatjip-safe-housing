'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: '외같집은 공인중개사 서비스인가요?',
    a: '아니요. 외같집은 부동산 서류 분석, 위험 진단, 다국어 절차 안내, 매물 정보 관리 기능을 제공하는 플랫폼입니다. 필요한 경우 사용자는 관련 전문가의 도움을 받을 수 있습니다.',
  },
  {
    q: '외국인이 계약 전에도 사용할 수 있나요?',
    a: '네. 계약서와 관련 서류를 업로드해 위험 요소를 미리 확인할 수 있습니다.',
  },
  {
    q: '어떤 언어를 지원하나요?',
    a: '초기 버전에서는 한국어, 영어, 중국어, 베트남어, 일본어를 지원하는 구조로 설계합니다.',
  },
  {
    q: '국적이나 비자 유형에 따라 서류가 달라지나요?',
    a: '네. 국적, 비자 유형, 체류 목적, 주거 유형에 따라 필요한 서류와 절차를 맞춤 안내합니다.',
  },
  {
    q: '수익모델은 무엇인가요?',
    a: '집주인의 매물 등록 서비스 이용료, AI 안심 분석 이용료, 프리미엄 노출 플랜, 주거 관련 제휴 업체 배너 광고수익으로 구성됩니다.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading eyebrow="자주 묻는 질문" title="궁금한 점을 확인하세요" />
      <div className="mt-10 space-y-3">
        {FAQS.map((item, i) => {
          const isOpen = open === i
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-bold text-foreground sm:text-base">
                  {item.q}
                </span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-primary transition-transform',
                    isOpen && 'rotate-180',
                  )}
                />
              </button>
              <div
                className={cn(
                  'grid transition-all duration-300',
                  isOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
