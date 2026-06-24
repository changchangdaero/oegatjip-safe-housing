import { Search } from 'lucide-react'
import { PageHero } from '@/components/oigatjip/page-hero'
import { PropertyCard } from '@/components/oigatjip/property-card'
import { SiteFooter } from '@/components/oigatjip/site-footer'
import { PROPERTIES } from '@/lib/properties'

const FILTERS = ['전체', '아파트', '오피스텔', '원룸', '월세', '전세', '매매']
const POPULAR = ['홍대', '강남역', '이태원', '부산 해운대', '제주 연동']

// duplicate for a fuller grid
const LISTINGS = [...PROPERTIES, ...PROPERTIES].map((p, i) => ({
  ...p,
  id: `${p.id}-${i}`,
}))

export default function SearchPage() {
  return (
    <>
      <PageHero
        title="매물 찾기"
        description="지역, 지하철역, 동네명으로 검토된 안심 주거 정보를 찾아보세요."
      />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="지역, 지하철역, 동네명으로 검색하세요"
                className="h-12 w-full rounded-xl border border-border bg-background pl-11 pr-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              <Search className="h-4 w-4" />
              검색하기
            </button>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground">
              인기 검색어
            </span>
            {POPULAR.map((p) => (
              <button
                key={p}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground hover:border-primary hover:text-primary"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
          {FILTERS.map((f, i) => (
            <button
              key={f}
              className={
                i === 0
                  ? 'shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground'
                  : 'shrink-0 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary'
              }
            >
              {f}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          총 <span className="font-bold text-foreground">{LISTINGS.length}</span>
          개의 안심 매물 정보
        </p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LISTINGS.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
