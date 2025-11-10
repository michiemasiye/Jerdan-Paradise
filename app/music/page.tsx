import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AlbumSection } from "@/components/album-section"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function MusicPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden min-h-[60vh] md:min-h-[70vh]">
        <div className="container mx-auto px-6 py-24 md:py-32 text-center space-y-6">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="aspect-square bg-secondary/20 rounded-lg flex items-center justify-center">
                  <span className="text-4xl">🎵</span>
                </div>
                <h3 className="font-semibold text-xl">Apostolic Gospel</h3>
                <p className="text-sm text-muted-foreground">Foundation album with powerful gospel worship</p>
                <p className="text-xs text-accent">2019</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="aspect-square bg-secondary/20 rounded-lg flex items-center justify-center">
                  <span className="text-4xl">✨</span>
                </div>
                <h3 className="font-semibold text-xl">Kadosh</h3>
                <p className="text-sm text-muted-foreground">Sacred worship and prophetic declarations</p>
                <p className="text-xs text-accent">2021</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="aspect-square bg-secondary/20 rounded-lg flex items-center justify-center">
                  <span className="text-4xl">🔥</span>
                </div>
                <h3 className="font-semibold text-xl">Kudenga Zvarongwa</h3>
                <p className="text-sm text-muted-foreground">Prophetic worship and revival anthems</p>
                <p className="text-xs text-accent">2024</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="aspect-square bg-secondary/20 rounded-lg flex items-center justify-center">
                  <span className="text-4xl">🚪</span>
                </div>
                <h3 className="font-semibold text-xl">ACCESS GRANTED</h3>
                <p className="text-sm text-muted-foreground">Latest album opening doors to divine encounters</p>
                <p className="text-xs text-accent">2025</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
