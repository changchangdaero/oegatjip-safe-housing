import { PROPERTIES } from '@/lib/properties'
import { PropertyCard } from './property-card'
import { SectionHeading } from './section-heading'

export function VerifiedProperties() {
  return (
    <section className="bg-[linear-gradient(180deg,white,oklch(0.965_0.025_244))]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="안심 매물 정보"
          title="외같집이 검토한 안심 매물"
          description="외국인 거주와 계약 안전성을 고려해 기본 정보와 서류 확인 절차를 거친 매물 정보를 보여드립니다."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          ※ 외같집은 검토된 주거 정보와 서류 확인 결과를 안내하는 플랫폼이며, 표시된
          정보는 안심 확인을 돕기 위한 참고 자료입니다.
        </p>
      </div>
    </section>
  )
}
