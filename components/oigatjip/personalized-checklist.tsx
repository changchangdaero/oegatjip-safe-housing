'use client'

import { useState } from 'react'
import { CheckCircle2, FileCheck } from 'lucide-react'
import { SectionHeading } from './section-heading'

const OPTIONS = {
  language: ['English', '한국어', '中文', 'Tiếng Việt', '日本語'],
  nationality: ['United States', 'China', 'Vietnam', 'Japan', 'Other'],
  visa: ['D-2 (유학)', 'E-7 (특정활동)', 'F-2 (거주)', 'F-6 (결혼이민)', 'D-8 (투자)'],
  purpose: ['학업', '취업', '거주', '투자'],
  housing: ['아파트', '오피스텔', '원룸', '단독주택'],
  deal: ['월세', '전세', '매매'],
}

const DOCS = [
  'Passport',
  'Alien Registration Card',
  'Certificate of Enrollment',
  'Proof of Residence',
  'Contract Copy',
  'Deposit Payment Record',
]

function Field({
  label,
  options,
}: {
  label: string
  options: string[]
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-muted-foreground">
        {label}
      </span>
      <select className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm font-medium text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  )
}

export function PersonalizedChecklist() {
  const [visa] = useState('D-2 Student Visa')

  return (
    <section id="roadmap" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="맞춤 필요서류"
        title="국적과 비자에 맞춘 필요서류 안내"
        description="국적, 비자 유형, 체류 목적, 주거 유형에 따라 필요한 서류와 절차를 맞춤 안내합니다."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="언어" options={OPTIONS.language} />
            <Field label="국적" options={OPTIONS.nationality} />
            <Field label="비자 유형" options={OPTIONS.visa} />
            <Field label="체류 목적" options={OPTIONS.purpose} />
            <Field label="주거 유형" options={OPTIONS.housing} />
            <Field label="거래 유형" options={OPTIONS.deal} />
          </div>
          <button className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            <FileCheck className="h-4.5 w-4.5" />
            맞춤 필요서류 확인하기
          </button>
        </div>

        <div className="rounded-3xl border border-primary/20 bg-accent/40 p-6 shadow-sm">
          <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
            For {visa}
          </span>
          <h3 className="mt-4 text-lg font-bold text-foreground">필요서류</h3>
          <ul className="mt-4 space-y-2.5">
            {DOCS.map((doc) => (
              <li
                key={doc}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-3.5 text-sm font-medium text-foreground"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--color-success)]" />
                {doc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
