'use client'

import { useState } from 'react'
import {
  Bell,
  FileText,
  Globe,
  Heart,
  LogIn,
  Settings,
  ShieldCheck,
  UserPlus,
} from 'lucide-react'
import { PageHero } from '@/components/oigatjip/page-hero'
import { SiteFooter } from '@/components/oigatjip/site-footer'
import { cn } from '@/lib/utils'

const MENU = [
  { icon: FileText, label: '내 문서 보관함', value: '4건' },
  { icon: ShieldCheck, label: '안심 분석 리포트', value: '2건' },
  { icon: Heart, label: '관심 매물', value: '7건' },
  { icon: Globe, label: '언어 설정', value: '한국어' },
  { icon: Bell, label: '알림 설정', value: '' },
  { icon: Settings, label: '계정 설정', value: '' },
]

export default function MyPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [loggedIn, setLoggedIn] = useState(false)

  if (loggedIn) {
    return (
      <>
        <PageHero
          title="마이 페이지"
          description="내 문서, 분석 리포트, 관심 매물과 계정 설정을 한 곳에서 관리하세요."
        />
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
              민
            </span>
            <div>
              <p className="text-base font-bold text-foreground">김민준 님</p>
              <p className="text-sm text-muted-foreground">D-2 유학 비자 · 서울</p>
            </div>
            <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              Safety Check
            </span>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            {MENU.map((m, i) => {
              const Icon = m.icon
              return (
                <button
                  key={m.label}
                  className={cn(
                    'flex w-full items-center gap-3 px-5 py-4 text-left hover:bg-secondary',
                    i !== MENU.length - 1 && 'border-b border-border',
                  )}
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {m.label}
                  </span>
                  <span className="ml-auto text-sm text-muted-foreground">
                    {m.value}
                  </span>
                </button>
              )
            })}
          </div>

          <button
            onClick={() => setLoggedIn(false)}
            className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-xl border border-border bg-card text-sm font-semibold text-foreground hover:bg-secondary"
          >
            로그아웃
          </button>
        </div>
        <SiteFooter />
      </>
    )
  }

  return (
    <>
      <PageHero
        title={mode === 'login' ? '로그인' : '회원가입'}
        description="외같집 계정으로 문서 보관함과 안심 분석 리포트를 안전하게 관리하세요."
      />
      <div className="mx-auto max-w-md px-4 py-10 sm:px-6">
        <div className="flex gap-1 rounded-2xl bg-secondary p-1">
          {[
            { id: 'login', label: '로그인', icon: LogIn },
            { id: 'signup', label: '회원가입', icon: UserPlus },
          ].map((t) => {
            const Icon = t.icon
            return (
              <button
                key={t.id}
                onClick={() => setMode(t.id as 'login' | 'signup')}
                className={cn(
                  'flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm font-semibold transition-colors',
                  mode === t.id
                    ? 'bg-card text-primary shadow-sm'
                    : 'text-muted-foreground',
                )}
              >
                <Icon className="h-4 w-4" />
                {t.label}
              </button>
            )
          })}
        </div>

        <div className="mt-6 space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
          {mode === 'signup' && (
            <Input label="이름" placeholder="이름을 입력하세요" />
          )}
          <Input label="이메일" type="email" placeholder="you@example.com" />
          <Input label="비밀번호" type="password" placeholder="••••••••" />
          {mode === 'signup' && (
            <label className="flex items-start gap-2 text-xs text-muted-foreground">
              <input type="checkbox" className="mt-0.5 accent-[var(--primary)]" />
              외같집 이용약관 및 개인정보 처리방침에 동의합니다.
            </label>
          )}
          <button
            onClick={() => setLoggedIn(true)}
            className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {mode === 'login' ? '로그인' : '회원가입'}
          </button>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}

function Input({
  label,
  type = 'text',
  placeholder,
}: {
  label: string
  type?: string
  placeholder?: string
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
    </label>
  )
}
