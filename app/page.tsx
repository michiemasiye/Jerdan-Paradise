import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AlbumSection } from "@/components/album-section"
import { VideosSection } from "@/components/videos-section"
import { EventSection } from "@/components/event-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AlbumSection />
      <VideosSection />
      <EventSection />
      <Footer />
    </main>
  )
}
