import {
  AlertTriangle,
  CheckCircle2,
  Circle,
  FileText,
  TrendingUp,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const WARNINGS = [
  '보증금이 유사 사례 대비 높게 설정되어 있습니다.',
  '소유권 확인 문서가 누락되었습니다.',
  '특약 조항에 추가 검토가 필요한 문장이 있습니다.',
  '잔금 지급 일정 확인이 필요합니다.',
]

const DOCS = [
  { name: '임대차 계약서', done: true },
  { name: '등기부등본', done: true },
  { name: '건축물대장', done: false },
  { name: '신분 확인 서류', done: false },
]

function ScoreRing({ score }: { score: number }) {
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference
  return (
    <div className="relative flex h-36 w-36 items-center justify-center">
      <svg className="h-36 w-36 -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="var(--border)"
          strokeWidth="12"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="var(--color-warning)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute text-center">
        <span className="block text-3xl font-extrabold text-foreground">
          {score}
        </span>
        <span className="text-xs font-medium text-muted-foreground">/ 100</span>
      </div>
    </div>
  )
}

export function SafetyDashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-5 lg:grid-cols-5">
      {/* score card */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-foreground">Risk Score</h3>
          <span className="inline-flex items-center gap-1 rounded-full bg-[color-mix(in_oklch,var(--color-warning),white_85%)] px-2.5 py-1 text-xs font-bold text-[var(--color-warning)]">
            <TrendingUp className="h-3.5 w-3.5" />
            주의 필요
          </span>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <ScoreRing score={72} />
          <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
            전반적으로 거래는 가능하나 일부 항목에서 추가 확인이 필요합니다.
          </p>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2 text-center">
          {[
            { label: '제출 서류', value: '2 / 4' },
            { label: '탐지 경고', value: '4건' },
            { label: '진행률', value: '60%' },
          ].map((m) => (
            <div key={m.label} className="rounded-xl bg-secondary p-3">
              <p className="text-base font-extrabold text-foreground">
                {m.value}
              </p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* right column */}
      <div className="space-y-5 lg:col-span-3">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
            <AlertTriangle className="h-4 w-4 text-[var(--color-warning)]" />
            Detected Warnings
          </h3>
          <ul className="mt-4 space-y-2.5">
            {WARNINGS.map((w) => (
              <li
                key={w}
                className="flex items-start gap-3 rounded-xl border border-[var(--color-warning)]/20 bg-[color-mix(in_oklch,var(--color-warning),white_90%)] p-3 text-sm text-foreground/85"
              >
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-warning)]" />
                {w}
              </li>
            ))}
          </ul>
        </div>

        {!compact && (
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
                <FileText className="h-4 w-4 text-primary" />
                Required Documents
              </h3>
              <ul className="mt-4 space-y-2.5">
                {DOCS.map((d) => (
                  <li
                    key={d.name}
                    className="flex items-center gap-2.5 text-sm"
                  >
                    {d.done ? (
                      <CheckCircle2 className="h-4 w-4 text-[var(--color-success)]" />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span
                      className={cn(
                        d.done
                          ? 'text-foreground line-through decoration-muted-foreground/40'
                          : 'text-foreground/80',
                      )}
                    >
                      {d.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-primary/20 bg-accent/50 p-6 shadow-sm">
              <h3 className="text-sm font-bold text-foreground">
                Next Recommended Action
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                건축물대장과 소유권 확인 문서를 추가로 업로드하면 위험 점수를 더
                정확히 진단할 수 있어요.
              </p>
              <button className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                누락 서류 업로드하기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function SafetyDashboardSection() {
  return (
    <section id="analysis" className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-primary">
            AI 안심 분석
          </span>
          <h2 className="mt-2 text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            업로드한 서류를 AI가 분석해 위험을 진단합니다
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            위험 점수, 탐지된 경고, 필요 서류, 진행 상황을 한 화면에서 확인하세요.
          </p>
        </div>
        <div className="mt-12">
          <SafetyDashboard />
        </div>
      </div>
    </section>
  )
}
