export function PageHero({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="border-b border-border bg-gradient-to-b from-accent/60 to-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <h1 className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}
