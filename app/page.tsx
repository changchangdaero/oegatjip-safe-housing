import { Hero } from '@/components/oigatjip/hero'
import { SearchSafetyBox } from '@/components/oigatjip/search-safety-box'
import { FeatureCards } from '@/components/oigatjip/feature-cards'
import { VerifiedProperties } from '@/components/oigatjip/verified-properties'
import { HowItWorks } from '@/components/oigatjip/how-it-works'
import { Multilingual } from '@/components/oigatjip/multilingual'
import { SafetyDashboardSection } from '@/components/oigatjip/safety-dashboard'
import { PersonalizedChecklist } from '@/components/oigatjip/personalized-checklist'
import { LandlordSection } from '@/components/oigatjip/landlord-section'
import { RevenueModel } from '@/components/oigatjip/revenue-model'
import { TrustBanner } from '@/components/oigatjip/trust-banner'
import { Pricing } from '@/components/oigatjip/pricing'
import { Faq } from '@/components/oigatjip/faq'
import { SiteFooter } from '@/components/oigatjip/site-footer'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchSafetyBox />
      <FeatureCards />
      <VerifiedProperties />
      <HowItWorks />
      <Multilingual />
      <SafetyDashboardSection />
      <PersonalizedChecklist />
      <LandlordSection />
      <RevenueModel />
      <TrustBanner />
      <Pricing />
      <Faq />
      <SiteFooter />
    </>
  )
}
