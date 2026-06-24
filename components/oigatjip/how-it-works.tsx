import { ClipboardCheck, FileUp, Search, ShieldCheck } from 'lucide-react'
import { SectionHeading } from './section-heading'

const STEPS = [
  {
    icon: Search,
    title: '매물 검색',
    desc: '지역, 가격, 조건을 설정해 적합한 주거 정보를 찾아요.',
  },
  {
    icon: FileUp,
    title: '서류 제출',
    desc: '계약서, 등기부등본, 건축물대장 등 필요한 문서를 업로드해요.',
  },
  {
    icon: ShieldCheck,
    title: '안심 분석 결과',
    desc: '위험 요소를 확인하고 AI 분석 리포트를 받아요.',
  },
  {
    icon: ClipboardCheck,
    title: '안심 계약 & 입주 준비',
    desc: '맞춤 로드맵을 따라 계약 전후 절차를 확인해요.',
  },
]

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="이용 방법"
        title="외같집 이용 방법"
        description="4단계로 쉽고 안전하게 내 집을 확인하세요."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => {
          const Icon = s.icon
          return (
            <div key={s.title} className="relative text-center">
              <div className="blue-icon relative mx-auto h-20 w-20">
                <Icon className="h-8 w-8" />
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-extrabold text-primary shadow-sm">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-base font-extrabold text-navy">
                {s.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
