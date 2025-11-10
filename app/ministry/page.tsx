import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function MinistryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden min-h-[60vh] md:min-h-[70vh]">
        <div className="container mx-auto px-6 py-24 md:py-32 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">Ministry & Events</h1>
          <p className="text-xl md:text-2xl text-center text-foreground/90 max-w-3xl mx-auto">
            Join us for powerful worship experiences and encounters with God
          </p>
        </div>
      </section>

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

      {/* Ministry Focus */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-12">Ministry Focus</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">🎵</span>
                </div>
                <h3 className="text-xl font-semibold">Worship Leading</h3>
                <p className="text-muted-foreground">
                  Leading believers into authentic worship and intimate encounters with God's presence
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">🙏</span>
                </div>
                <h3 className="text-xl font-semibold">Prophetic Ministry</h3>
                <p className="text-muted-foreground">
                  Moving in the prophetic through worship and creating space for God to speak
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold">Revival Meetings</h3>
                <p className="text-muted-foreground">
                  Hosting and participating in revival meetings that stir hearts for God
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
