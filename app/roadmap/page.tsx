import { CheckCircle2, Circle, Dot } from 'lucide-react'
import { PageHero } from '@/components/oigatjip/page-hero'
import { PersonalizedChecklist } from '@/components/oigatjip/personalized-checklist'
import { SiteFooter } from '@/components/oigatjip/site-footer'

const STEPS = [
  {
    title: '비자 & 체류 자격 확인',
    desc: '비자 유형과 체류 목적에 맞는 계약 가능 조건을 확인해요.',
    state: 'done',
  },
  {
    title: '예산 & 자금 계획',
    desc: '보증금, 월세, 대출 가능 여부와 환율을 고려해 예산을 세워요.',
    state: 'done',
  },
  {
    title: '매물 탐색 & 서류 확인',
    desc: '안심 매물을 찾고 등기부등본·건축물대장을 확인해요.',
    state: 'current',
  },
  {
    title: '계약 위험 진단',
    desc: 'AI 분석으로 특약과 권리관계 위험을 점검해요.',
    state: 'todo',
  },
  {
    title: '계약 체결 & 보증금 보호',
    desc: '확정일자, 전입신고 등 보증금 보호 절차를 진행해요.',
    state: 'todo',
  },
  {
    title: '입주 & 행정 처리',
    desc: '외국인 등록, 공과금, 인터넷 등 입주 후 절차를 마무리해요.',
    state: 'todo',
  },
]

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        title="내집 마련 로드맵"
        description="비자, 자금, 대출, 세금까지 단계별 맞춤 가이드로 계약 전후 절차를 안내합니다."
      />
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <ol className="relative space-y-1">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                {step.state === 'done' ? (
                  <CheckCircle2 className="h-7 w-7 text-[var(--color-success)]" />
                ) : step.state === 'current' ? (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Dot className="h-6 w-6" />
                  </span>
                ) : (
                  <Circle className="h-7 w-7 text-muted-foreground/50" />
                )}
                {i < STEPS.length - 1 && (
                  <span className="my-1 w-0.5 flex-1 bg-border" />
                )}
              </div>
              <div
                className={
                  'mb-4 flex-1 rounded-2xl border p-5 ' +
                  (step.state === 'current'
                    ? 'border-primary/30 bg-accent/40'
                    : 'border-border bg-card')
                }
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-foreground">
                    {`${i + 1}. ${step.title}`}
                  </h3>
                  {step.state === 'current' && (
                    <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                      진행 중
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <PersonalizedChecklist />
      <SiteFooter />
    </>
  )
}
