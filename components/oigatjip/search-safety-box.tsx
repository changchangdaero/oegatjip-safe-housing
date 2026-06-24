'use client'

import { useState } from 'react'
import {
  CalendarCheck,
  FileText,
  Search,
  ShieldCheck,
  Upload,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const TABS = [
  { id: 'search', label: '매물 검색', icon: Search },
  { id: 'analysis', label: '안심 분석', icon: ShieldCheck },
  { id: 'consult', label: '상담 예약', icon: CalendarCheck },
] as const

const POPULAR = ['홍대', '강남역', '이태원', '부산 해운대', '제주 연동']
const DEALS = ['월세', '전세', '매매']

export function SearchSafetyBox() {
  const [tab, setTab] = useState<(typeof TABS)[number]['id']>('search')

  return (
    <section className="relative z-10 mx-auto -mt-2 max-w-5xl px-4 sm:px-6 lg:-mt-10 lg:px-8">
      <div className="premium-card p-3 sm:p-5">
        {/* tabs */}
        <div className="flex gap-1 rounded-2xl bg-secondary/80 p-1">
          {TABS.map((t) => {
            const Icon = t.icon
            const active = tab === t.id
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  'flex flex-1 items-center justify-center gap-1.5 rounded-xl px-2 py-2.5 text-sm font-semibold transition-colors',
                  active
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-muted-foreground hover:text-navy',
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="whitespace-nowrap">{t.label}</span>
              </button>
            )
          })}
        </div>

        <div className="p-2 pt-5 sm:p-3 sm:pt-5">
          {tab === 'search' && (
            <div className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="지역, 지하철역, 동네명으로 검색하세요"
                    className="h-12 w-full rounded-xl border border-border bg-white pl-11 pr-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <select className="h-12 rounded-xl border border-border bg-white px-3 text-sm font-medium text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30">
                  {DEALS.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
                <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-[0_12px_30px_oklch(0.56_0.2_255_/_0.24)] transition-colors hover:bg-primary/90">
                  <Search className="h-4 w-4" />
                  검색하기
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-muted-foreground">
                  인기 검색어
                </span>
                {POPULAR.map((p) => (
                  <button
                    key={p}
                    className="rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-secondary-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          {tab === 'analysis' && (
            <div className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <UploadButton
                  icon={FileText}
                  title="계약서 업로드"
                  desc="임대차 / 매매 계약서"
                />
                <UploadButton
                  icon={Upload}
                  title="등기부등본 업로드"
                  desc="권리관계 확인 서류"
                />
              </div>
              <button className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                <ShieldCheck className="h-4.5 w-4.5" />
                AI 위험 진단 시작
              </button>
            </div>
          )}

          {tab === 'consult' && (
            <div className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  placeholder="이름"
                  className="h-12 rounded-xl border border-border bg-white px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
                <input
                  placeholder="연락처 또는 이메일"
                  className="h-12 rounded-xl border border-border bg-white px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>
              <textarea
                placeholder="상담 받고 싶은 내용을 적어주세요 (계약 단계, 비자 유형 등)"
                rows={3}
                className="w-full rounded-xl border border-border bg-white px-3 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
              <button className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                <CalendarCheck className="h-4.5 w-4.5" />
                상담 예약하기
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function UploadButton({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof FileText
  title: string
  desc: string
}) {
  return (
    <button className="flex items-center gap-3 rounded-xl border border-dashed border-border bg-white p-4 text-left transition-colors hover:border-primary hover:bg-accent/40">
      <span className="blue-icon h-11 w-11 shrink-0">
        <Icon className="h-5 w-5" />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-semibold text-foreground">
          {title}
        </span>
        <span className="block text-xs text-muted-foreground">{desc}</span>
      </span>
    </button>
  )
}
