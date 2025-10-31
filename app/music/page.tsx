import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AlbumSection } from "@/components/album-section"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function MusicPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-6 py-32 relative z-10">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">Music & Albums</h1>
            <p className="text-xl md:text-2xl text-center text-foreground/90 max-w-3xl mx-auto">
              Experience the sound of heaven through worship
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Albums Section */}
      <AlbumSection />

      {/* Discography Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-12">Discography</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Placeholder for additional albums */}
            <ScrollReveal delay={100}>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="aspect-square bg-secondary/20 rounded-lg" />
                <h3 className="font-semibold text-xl">Album Title</h3>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
