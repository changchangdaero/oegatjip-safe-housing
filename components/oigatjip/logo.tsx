import { cn } from '@/lib/utils'

const LOGO_SRC = '/images/oigatjip-logo.png'

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_oklch(0.2_0.075_258_/_0.14)]',
        className,
      )}
      aria-hidden="true"
    >
      <img
        src={LOGO_SRC}
        alt=""
        className="h-full w-full object-contain p-1"
        draggable={false}
      />
    </span>
  )
}

export function Logo({
  className,
  showSlogan = true,
}: {
  className?: string
  showSlogan?: boolean
}) {
  return (
    <div
      className={cn(
        'relative h-12 w-[8.75rem] overflow-hidden rounded-xl bg-white sm:h-[3.25rem] sm:w-[9.75rem]',
        className,
      )}
    >
      <img
        src={LOGO_SRC}
        alt={showSlogan ? '외같집 - 외국인 내집 마련' : '외같집'}
        className="absolute inset-0 h-full w-full object-contain"
        draggable={false}
      />
    </div>
  )
}
