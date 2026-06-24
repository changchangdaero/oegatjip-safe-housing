const STATS = [
  { value: '12,458건+', label: '분석 건수' },
  { value: '2,381건+', label: '위험 탐지' },
  { value: '58명', label: '파트너 전문가' },
  { value: '4.9 / 5', label: '이용자 만족도' },
]

export function TrustBanner() {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-center text-xl font-extrabold sm:text-2xl">
          외같집은 외국인의 안전한 주거계약을 위해 노력합니다
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/6 p-5 text-center">
              <p className="text-2xl font-extrabold text-blue-200 sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-sm text-navy-foreground/75">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
