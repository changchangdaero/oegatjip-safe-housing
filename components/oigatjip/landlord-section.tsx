import Link from 'next/link'
import {
  Building2,
  ClipboardList,
  FileCheck2,
  FolderUp,
  Languages,
  MessagesSquare,
  RouteIcon,
  Star,
} from 'lucide-react'

const FEATURES = [
  { icon: Building2, label: '매물 정보 등록' },
  { icon: Languages, label: '다국어 매물 안내' },
  { icon: FolderUp, label: '문서 업로드 및 관리' },
  { icon: ClipboardList, label: '임차인 필요서류 체크리스트' },
  { icon: RouteIcon, label: '계약 준비 로드맵' },
  { icon: FileCheck2, label: 'AI 문서 완성도 확인' },
  { icon: Star, label: '프리미엄 노출 플랜' },
  { icon: MessagesSquare, label: '안전 커뮤니케이션 워크스페이스' },
]

export function LandlordSection() {
  return (
    <section id="landlord" className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-wide text-primary">
              집주인을 위한 서비스
            </span>
            <h2 className="mt-2 text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              외국인에게 안전하게 매물을 안내하고 싶은 집주인을 위한 서비스
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              집주인은 외같집에 매물 정보를 등록하고, 다국어 안내 페이지, 문서 관리,
              안심 확인 기능을 플랫폼 서비스 이용요금으로 사용할 수 있습니다.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/my"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Building2 className="h-4.5 w-4.5" />
                집주인 매물 등록하기
              </Link>
              <Link
                href="#pricing"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                서비스 이용요금 보기
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {FEATURES.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.label}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-foreground">
                    {f.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
