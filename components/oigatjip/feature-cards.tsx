import { FileSearch, MapPinned, ShieldAlert, Users } from 'lucide-react'
import { SectionHeading } from './section-heading'

const FEATURES = [
  {
    icon: FileSearch,
    title: '서류 분석 & 검토',
    desc: '등기부등본, 건축물대장, 계약서 등 핵심 서류를 자동으로 분석해 드려요.',
  },
  {
    icon: ShieldAlert,
    title: '사기 예방 시스템',
    desc: '이중계약, 권리관계 이상, 위험한 특약 등 위험 요소를 사전에 탐지합니다.',
  },
  {
    icon: MapPinned,
    title: '내집 마련 로드맵',
    desc: '비자, 자금, 대출, 세금까지 단계별 맞춤 가이드를 제공합니다.',
  },
  {
    icon: Users,
    title: '국적·비자별 맞춤 서류',
    desc: '국적과 비자 유형에 맞는 필요서류와 절차를 한눈에 안내합니다.',
  },
]

export function FeatureCards() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="핵심 기능"
        title="복잡한 한국 부동산, 외같집이 안전하게 정리합니다"
        description="서류 분석부터 위험 탐지, 맞춤 절차 안내까지 외국인에게 꼭 필요한 기능을 모았습니다."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => {
          const Icon = f.icon
          return (
            <div
              key={f.title}
              className="group premium-card p-6 transition-all hover:-translate-y-1"
            >
              <span className="blue-icon h-13 w-13">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-navy">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
