'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

type Plan = {
  name: string
  price: string
  desc: string
  features: string[]
  featured?: boolean
}

const FOREIGNER: Plan[] = [
  {
    name: 'Free',
    price: '무료',
    desc: '처음 시작하는 외국인 사용자',
    features: ['기본 체크리스트', '기본 주거 용어 가이드', '샘플 로드맵'],
  },
  {
    name: 'Safety Check',
    price: '₩19,000',
    desc: '계약 전 위험을 확인하고 싶은 사용자',
    features: [
      'AI 계약서 스캔',
      '위험 점수',
      '경고 리포트',
      '맞춤 필요서류',
      '다국어 계약 요약',
    ],
    featured: true,
  },
  {
    name: 'Premium Guide',
    price: '₩39,000',
    desc: '계약 전 과정을 안심하고 진행',
    features: [
      '전체 문서 보관함',
      '고급 위험 진단',
      '단계별 계약 로드맵',
      '다국어 상세 요약',
      '제휴 서비스 추천',
    ],
  },
]

const LANDLORD: Plan[] = [
  {
    name: 'Basic Listing',
    price: '₩29,000',
    desc: '매물을 처음 등록하는 집주인',
    features: ['매물 정보 등록', '기본 문서 업로드', '기본 매물 페이지'],
  },
  {
    name: 'Verified Listing',
    price: '₩59,000',
    desc: '안심 배지로 신뢰를 강화',
    features: [
      '다국어 매물 안내',
      '문서 완성도 확인',
      '안심 배지',
      '향상된 노출',
    ],
    featured: true,
  },
  {
    name: 'Premium Landlord Plan',
    price: '₩99,000',
    desc: '외국인 임차인 전용 관리 도구',
    features: [
      '고급 매물 관리 대시보드',
      'AI 문서 준비도 확인',
      '외국인 임차인 안내 페이지',
      '우선 노출 옵션',
    ],
  },
]

export function Pricing() {
  const [role, setRole] = useState<'foreigner' | 'landlord'>('foreigner')
  const plans = role === 'foreigner' ? FOREIGNER : LANDLORD

  return (
    <section id="pricing" className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="요금제"
          title="필요한 만큼, 합리적인 플랫폼 서비스 이용료"
          description="외국인 사용자와 집주인 사용자를 위한 요금제를 각각 제공합니다."
        />

        <div className="mx-auto mt-8 flex w-fit gap-1 rounded-2xl border border-border bg-card p-1">
          {[
            { id: 'foreigner', label: '외국인 사용자' },
            { id: 'landlord', label: '집주인 사용자' },
          ].map((r) => (
            <button
              key={r.id}
              onClick={() => setRole(r.id as 'foreigner' | 'landlord')}
              className={cn(
                'rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors',
                role === r.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-3xl border bg-card p-6 shadow-sm',
                plan.featured
                  ? 'border-primary ring-2 ring-primary/30'
                  : 'border-border',
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  추천
                </span>
              )}
              <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
              <p className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-extrabold text-foreground">
                  {plan.price}
                </span>
                {plan.price !== '무료' && (
                  <span className="pb-1 text-sm text-muted-foreground">/ 월</span>
                )}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-foreground/85"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={cn(
                  'mt-7 inline-flex h-12 items-center justify-center rounded-xl text-sm font-semibold transition-colors',
                  plan.featured
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border bg-background text-foreground hover:bg-secondary',
                )}
              >
                시작하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
