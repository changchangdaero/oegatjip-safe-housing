import { Building2, FileSearch, Megaphone, Star } from 'lucide-react'
import { SectionHeading } from './section-heading'

const CARDS = [
  {
    icon: Building2,
    title: '매물 등록 서비스 이용료',
    desc: '집주인이 외같집에 매물 정보를 등록하고 문서 관리 및 다국어 안내 기능을 사용하는 데 따른 플랫폼 이용요금입니다.',
  },
  {
    icon: FileSearch,
    title: 'AI 안심 분석 이용료',
    desc: '계약서, 등기부등본, 건축물대장 등 문서 분석과 위험 진단 리포트 제공에 대한 이용요금입니다.',
  },
  {
    icon: Star,
    title: '프리미엄 노출 플랜',
    desc: '집주인이 매물의 신뢰 정보와 다국어 안내를 강화해 더 잘 보이도록 하는 선택형 플랜입니다.',
  },
  {
    icon: Megaphone,
    title: '파트너 배너 광고',
    desc: '이사, 인테리어, 청소, 보험, 행정 대행 등 외국인 주거 생활에 필요한 제휴 업체 광고수익입니다.',
  },
]

export function RevenueModel() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="비즈니스 모델"
        title="외같집의 수익모델"
        description="외같집은 안심거래 워크스페이스와 문서 분석 중심의 플랫폼 서비스 이용료로 운영됩니다."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((c) => {
          const Icon = c.icon
          return (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-base font-bold text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
