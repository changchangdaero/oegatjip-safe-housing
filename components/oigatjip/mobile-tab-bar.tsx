'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, ShieldCheck, Map, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const TABS = [
  { label: '홈', href: '/', icon: Home },
  { label: '검색', href: '/search', icon: Search },
  { label: '분석', href: '/analysis', icon: ShieldCheck },
  { label: '로드맵', href: '/roadmap', icon: Map },
  { label: '마이', href: '/my', icon: User },
]

export function MobileTabBar() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
      aria-label="모바일 메뉴"
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-around">
        {TABS.map((tab) => {
          const active =
            tab.href === '/' ? pathname === '/' : pathname.startsWith(tab.href)
          const Icon = tab.icon
          return (
            <li key={tab.href} className="flex-1">
              <Link
                href={tab.href}
                className={cn(
                  'flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors',
                  active ? 'text-primary' : 'text-muted-foreground',
                )}
              >
                <span
                  className={cn(
                    'flex h-9 w-12 items-center justify-center rounded-full transition-colors',
                    active && 'bg-accent',
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                {tab.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
