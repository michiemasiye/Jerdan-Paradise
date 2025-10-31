import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-6 py-32 relative z-10">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">Blog & Insights</h1>
            <p className="text-xl md:text-2xl text-center text-foreground/90 max-w-3xl mx-auto">
              Reflections on worship, faith, and walking with God
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <ScrollReveal>
              <div className="text-center text-muted-foreground">
                <p className="text-lg">
                  Blog posts coming soon. Stay tuned for inspiring content about worship and faith.
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
