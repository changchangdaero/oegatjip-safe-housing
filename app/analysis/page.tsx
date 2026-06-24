import { FileText, ShieldCheck, Upload } from 'lucide-react'
import { PageHero } from '@/components/oigatjip/page-hero'
import { SafetyDashboard } from '@/components/oigatjip/safety-dashboard'
import { SiteFooter } from '@/components/oigatjip/site-footer'

export default function AnalysisPage() {
  return (
    <>
      <PageHero
        title="안심 분석"
        description="계약서와 등기부등본을 업로드하면 AI가 위험 요소와 이상거래 가능성을 진단합니다."
      />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UploadCard icon={FileText} title="계약서 업로드" desc="임대차 / 매매 계약서" />
          <UploadCard
            icon={Upload}
            title="등기부등본 업로드"
            desc="권리관계 확인 서류"
          />
          <div className="flex flex-col justify-center rounded-2xl border border-primary/20 bg-accent/50 p-5">
            <p className="text-sm leading-relaxed text-foreground/80">
              두 가지 서류를 모두 업로드하면 더 정확한 위험 진단을 받을 수 있어요.
            </p>
            <button className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              <ShieldCheck className="h-4.5 w-4.5" />
              AI 위험 진단 시작
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold text-foreground">분석 결과 미리보기</h2>
          <SafetyDashboard />
        </div>
      </div>
      <SiteFooter />
    </>
  )
}

function UploadCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof FileText
  title: string
  desc: string
}) {
  return (
    <button className="flex items-center gap-3 rounded-2xl border border-dashed border-border bg-card p-5 text-left transition-colors hover:border-primary hover:bg-accent/40">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
        <Icon className="h-6 w-6" />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-bold text-foreground">{title}</span>
        <span className="block text-xs text-muted-foreground">{desc}</span>
      </span>
    </button>
  )
}
