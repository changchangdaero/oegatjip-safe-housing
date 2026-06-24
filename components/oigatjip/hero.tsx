import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Home,
  Languages,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.965_0.04_244),oklch(0.995_0.006_244)_68%)]" />
      <div className="pointer-events-none absolute left-1/2 top-16 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 pt-10 pb-10 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-8 lg:pt-24 lg:pb-20">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/85 px-3.5 py-1.5 text-xs font-extrabold text-primary shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            프리미엄 외국인 주거 계약 SaaS
          </span>
          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
            외국인도 같은 기준으로,
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              안심하고 계약하는 집
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            등기부등본부터 계약서까지, 부동산 서류를 분석하고 사기 위험을 미리
            확인하세요. 외같집이 한국 주거 계약의 복잡한 절차를 쉽게 안내합니다.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-start justify-center">
            <Link
              href="/search"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-[0_16px_36px_oklch(0.56_0.2_255_/_0.28)] transition-colors hover:bg-primary/90"
            >
              <Home className="h-4.5 w-4.5" />
              매물 검색하기
            </Link>
            <Link
              href="/analysis"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-white px-6 text-sm font-bold text-navy shadow-sm transition-colors hover:bg-secondary"
            >
              <FileSearch className="h-4.5 w-4.5 text-primary" />
              계약서 안심 분석
            </Link>
            <Link
              href="/#landlord"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold text-primary transition-colors hover:bg-accent"
            >
              집주인 매물 등록
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-3 text-sm text-muted-foreground sm:flex sm:items-center sm:justify-center sm:gap-6 lg:justify-start">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[var(--color-success)]" />
              서류 확인 절차
            </span>
            <span className="flex items-center gap-1.5">
              <FileSearch className="h-4 w-4 text-primary" />
              AI 위험 진단
            </span>
            <span className="flex items-center gap-1.5">
              <Languages className="h-4 w-4 text-primary" />
              5개 언어 지원
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="premium-card overflow-hidden p-3">
            <div className="relative overflow-hidden rounded-[1.25rem] bg-navy">
              <div className="absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-navy/95 to-transparent" />
              <div className="absolute left-6 top-5 z-20 text-navy-foreground">
                <p className="text-xs font-bold text-blue-100/80">OIGATJIP TRUST SCORE</p>
                <p className="mt-1 text-3xl font-extrabold">96.8</p>
              </div>
              <svg
                viewBox="0 0 520 86"
                className="absolute left-0 right-0 top-12 z-20 h-20 w-full text-navy-foreground/95"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M22 58 C108 4 412 4 498 58"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                <path d="M54 62 H466" stroke="#60a5fa" strokeWidth="5" strokeLinecap="round" />
              </svg>
            <img
              src="/images/hero-illustration.png"
              alt="한국 전통 지붕과 아파트, 계약서, 파란 방패 체크 아이콘이 함께 있는 외같집 일러스트"
                className="h-full min-h-[230px] w-full object-cover opacity-90 sm:min-h-[420px]"
            />
            </div>
          </div>
          <div className="absolute -bottom-5 -left-2 hidden items-center gap-3 rounded-2xl border border-border bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:flex">
            <span className="blue-icon h-11 w-11">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-extrabold text-navy">위험도 낮음</p>
              <p className="text-xs text-muted-foreground">서류 확인 완료</p>
            </div>
          </div>
          <div className="absolute -right-2 top-10 hidden rounded-2xl border border-border bg-white/92 p-4 shadow-xl backdrop-blur sm:block">
            <p className="text-xs font-bold text-muted-foreground">계약 체크리스트</p>
            <div className="mt-3 space-y-2">
              {['등기부등본 확인', '특약 위험 문구 탐지', '다국어 안내 생성'].map((item) => (
                <span key={item} className="flex items-center gap-2 text-xs font-bold text-navy">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
