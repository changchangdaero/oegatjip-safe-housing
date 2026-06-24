import Link from 'next/link'
import {
  Clock,
  Mail,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { Logo } from './logo'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './social-icons'

const COLUMNS = [
  {
    title: '서비스',
    links: ['매물 찾기', '안심 분석', '서류 관리', '안심거래 워크스페이스'],
  },
  {
    title: '가이드',
    links: ['이용 방법', '비자별 필요서류', '계약 로드맵', '다국어 주거 안내'],
  },
  {
    title: '회사 정보',
    links: ['외같집 소개', '수익모델', '파트너 제휴', '채용'],
  },
]

const SOCIAL_LINKS = [
  { label: '인스타그램', href: '#', icon: InstagramIcon },
  { label: '페이스북', href: '#', icon: FacebookIcon },
  { label: '유튜브', href: '#', icon: YoutubeIcon },
  { label: '채팅 문의', href: '#', icon: MessageCircle },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo showSlogan={false} className="h-16 w-[10.5rem] rounded-2xl" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              외국인도 같은 기준으로, 안심하고 계약하는 집. 외국인을 위한 부동산
              안심거래 통합 솔루션 플랫폼입니다.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-navy-foreground transition-colors hover:bg-white/20"
                  aria-label={label}
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white/5 p-5">
          <h3 className="text-sm font-bold">고객센터</h3>
          <div className="mt-3 grid gap-3 text-sm text-navy-foreground/75 sm:grid-cols-2 lg:grid-cols-4">
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-[var(--color-sky)]" />
              카카오톡 상담
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[var(--color-sky)]" />
              help@oigatjip.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[var(--color-sky)]" />
              02-1234-5678
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[var(--color-sky)]" />
              평일 10:00 - 18:00
            </span>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-navy-foreground/70">
            외국인이 한국에서 안심하고 집을 구하고, 소유할 수 있도록 외같집이
            함께합니다.
          </p>
          <p className="mt-3 text-xs text-navy-foreground/50">
            © {new Date().getFullYear()} 외같집 (Oigatjip). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
