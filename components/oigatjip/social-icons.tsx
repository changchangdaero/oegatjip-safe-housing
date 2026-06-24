import type { SVGProps } from 'react'

type SocialIconProps = SVGProps<SVGSVGElement>

function SocialIconBase({ children, ...props }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function InstagramIcon(props: SocialIconProps) {
  return (
    <SocialIconBase {...props}>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M16.8 7.3h.01" />
    </SocialIconBase>
  )
}

export function FacebookIcon(props: SocialIconProps) {
  return (
    <SocialIconBase {...props}>
      <path d="M14.5 8.2h-1.3c-1 0-1.7.7-1.7 1.8v2h2.7l-.4 2.8h-2.3v5" />
      <path d="M9.5 12h4.7" />
    </SocialIconBase>
  )
}

export function YoutubeIcon(props: SocialIconProps) {
  return (
    <SocialIconBase {...props}>
      <rect x="3.8" y="7" width="16.4" height="10" rx="3" />
      <path d="m10.5 10.2 4.2 2.8-4.2 2.8z" fill="currentColor" stroke="none" />
    </SocialIconBase>
  )
}
