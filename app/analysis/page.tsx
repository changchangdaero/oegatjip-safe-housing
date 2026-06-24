'use client'

import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { AlertCircle, CheckCircle2, FileText, ShieldCheck, Upload } from 'lucide-react'
import { PageHero } from '@/components/oigatjip/page-hero'
import { SafetyDashboard } from '@/components/oigatjip/safety-dashboard'
import { SiteFooter } from '@/components/oigatjip/site-footer'
import { LANGUAGE_OPTIONS, type LanguageCode } from '@/lib/i18n'

const getLanguageLabel = (language: LanguageCode) =>
  LANGUAGE_OPTIONS.find((item) => item.value === language)?.label ?? language

export default function AnalysisPage() {
  const [contractFile, setContractFile] = useState<File | null>(null)
  const [registryFile, setRegistryFile] = useState<File | null>(null)
  const [contractLanguage, setContractLanguage] = useState<LanguageCode | ''>('')
  const [registryLanguage, setRegistryLanguage] = useState<LanguageCode | ''>('')
  const [warning, setWarning] = useState('')

  const handleStartAnalysis = () => {
    if (contractFile && !contractLanguage) {
      setWarning('계약서 파일이 업로드되었습니다. 계약서 원본 언어를 선택해주세요.')
      return
    }

    if (registryFile && !registryLanguage) {
      setWarning('등기부등본 파일이 업로드되었습니다. 등기부등본 원본 언어를 선택해주세요.')
      return
    }

    setWarning('')
  }

  return (
    <>
      <PageHero
        title="안심 분석"
        description="계약서와 등기부등본을 업로드하면 AI가 위험 요소와 이상거래 가능성을 진단합니다."
      />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <UploadCard
            icon={FileText}
            title="계약서 업로드"
            desc="임대차 / 매매 계약서"
            file={contractFile}
            onFileChange={setContractFile}
            language={contractLanguage}
            onLanguageChange={setContractLanguage}
            languageLabel="계약서 언어"
            languagePlaceholder="계약서 원본 언어 선택"
          />
          <UploadCard
            icon={Upload}
            title="등기부등본 업로드"
            desc="권리관계 확인 서류"
            file={registryFile}
            onFileChange={setRegistryFile}
            language={registryLanguage}
            onLanguageChange={setRegistryLanguage}
            languageLabel="등기부등본 언어"
            languagePlaceholder="등기부등본 원본 언어 선택"
          />
          <div className="flex flex-col justify-center rounded-2xl border border-primary/20 bg-accent/50 p-5">
            <p className="text-sm leading-relaxed text-foreground/80">
              문서와 원본 언어를 함께 입력하면 더 정확한 AI 위험 진단을 받을 수 있어요.
            </p>
            {warning && (
              <p className="mt-3 flex items-start gap-2 rounded-xl border border-[color-mix(in_oklch,var(--color-warning),white_62%)] bg-[color-mix(in_oklch,var(--color-warning),white_88%)] px-3 py-2 text-xs font-semibold leading-relaxed text-navy">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-warning)]" />
                {warning}
              </p>
            )}
            <button
              type="button"
              onClick={handleStartAnalysis}
              className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <ShieldCheck className="h-4.5 w-4.5" />
              AI 위험 진단 시작
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold text-foreground">분석 결과 미리보기</h2>
          {(contractLanguage || registryLanguage) && (
            <div className="mb-4 rounded-2xl border border-primary/15 bg-white/80 p-4 shadow-sm">
              <p className="text-xs font-extrabold text-navy">문서 정보</p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs font-semibold text-muted-foreground">
                {contractLanguage && (
                  <span className="rounded-full border border-sky/70 bg-accent/50 px-3 py-1">
                    <span>계약서 언어:</span>{' '}
                    <span data-i18n-skip>{getLanguageLabel(contractLanguage)}</span>
                  </span>
                )}
                {registryLanguage && (
                  <span className="rounded-full border border-sky/70 bg-accent/50 px-3 py-1">
                    <span>등기부등본 언어:</span>{' '}
                    <span data-i18n-skip>{getLanguageLabel(registryLanguage)}</span>
                  </span>
                )}
              </div>
            </div>
          )}
          <SafetyDashboard />
        </div>
      </div>
      <SiteFooter />
    </>
  )
}

function UploadCard({
  icon: Icon,
  title,
  desc,
  file,
  onFileChange,
  language,
  onLanguageChange,
  languageLabel,
  languagePlaceholder,
}: {
  icon: LucideIcon
  title: string
  desc: string
  file: File | null
  onFileChange: (file: File | null) => void
  language: LanguageCode | ''
  onLanguageChange: (language: LanguageCode | '') => void
  languageLabel: string
  languagePlaceholder: string
}) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-card p-5 text-left transition-colors hover:border-primary hover:bg-accent/40">
      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="file"
          className="sr-only"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          onChange={(event) => onFileChange(event.target.files?.[0] ?? null)}
        />
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
          <Icon className="h-6 w-6" />
        </span>
        <span className="min-w-0 leading-tight">
          <span className="block text-sm font-bold text-foreground">{title}</span>
          <span className="block text-xs text-muted-foreground">{desc}</span>
          {file && (
            <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-primary">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span className="truncate">{file.name}</span>
            </span>
          )}
        </span>
      </label>

      <div className="mt-4 space-y-1.5">
        <label className="block text-xs font-extrabold text-navy">
          {languageLabel}
        </label>
        <select
          value={language}
          onChange={(event) =>
            onLanguageChange(event.target.value as LanguageCode | '')
          }
          className="h-10 w-full rounded-xl border border-sky/80 bg-white px-3 text-xs font-semibold text-foreground outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-ring/30"
        >
          <option value="">{languagePlaceholder}</option>
          {LANGUAGE_OPTIONS.map((item) => (
            <option key={item.value} value={item.value} data-i18n-skip>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
