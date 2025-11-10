import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AlbumSection } from "@/components/album-section"
import { VideosSection } from "@/components/videos-section"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AlbumSection />
      <VideosSection />
      
      {/* Coming Soon Album Section */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-block px-4 py-2 bg-accent/20 border border-accent rounded-full mb-6">
                <span className="text-accent font-semibold text-sm">COMING SOON</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-4">
                THY SECRET PLACE <span className="text-accent">LIVE DVD RECORDING</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                Details coming soon. Stay tuned for this powerful live worship recording experience.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
