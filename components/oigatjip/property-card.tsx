import { ArrowRight, MapPin, Maximize, ShieldCheck } from 'lucide-react'
import type { Property } from '@/lib/properties'
import { cn } from '@/lib/utils'

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group premium-card overflow-hidden transition-all hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image || '/placeholder.svg'}
          alt={`${property.name} 외관 사진`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-navy shadow-sm backdrop-blur">
          {property.type}
        </span>
        <span
          className={cn(
            'absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold shadow-sm backdrop-blur',
            property.statusTone === 'success'
              ? 'bg-[color-mix(in_oklch,var(--color-success),white_82%)] text-[var(--color-success)]'
              : 'bg-white/95 text-primary',
          )}
        >
          <ShieldCheck className="h-3.5 w-3.5" />
          {property.status}
        </span>
      </div>
      <div className="p-5">
        <p className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {property.region}
        </p>
        <h3 className="mt-1.5 text-lg font-extrabold text-navy">
          {property.name}
        </h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-extrabold text-primary">
            {property.price}
          </span>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Maximize className="h-4 w-4" />
            {property.area}
          </span>
        </div>
        <button className="mt-4 inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-xl border border-border bg-white text-sm font-bold text-navy transition-colors hover:bg-secondary">
          자세히 보기
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  )
}
