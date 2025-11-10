import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden min-h-[60vh] md:min-h-[70vh]">
        <div className="container mx-auto px-6 py-24 md:py-32 text-center space-y-6">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">About Minister Jerdan Paradise</h1>
            <p className="text-xl md:text-2xl text-center text-foreground/90 max-w-3xl mx-auto">
              A life dedicated to worship and leading believers into God's presence
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-01%20at%2015.02.21_ac114a28-9HyGdR10eNc7noen0zYXxILjIGErYg.jpg"
                  alt="Minister Jerdan Paradise"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Worshipping Jesus</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Minister Jerdan Paradise is a passionate worshipper and music minister called to spread the gospel
                    through worship as God moves across the earth in these times.
                  </p>
                  <p>
                    With a heart for authentic worship and a gift for leading others into God's presence, Minister
                    Jerdan has dedicated his life to stirring revival through powerful worship experiences.
                  </p>
                  <p>
                    His ministry is marked by a deep commitment to intimacy with God, prophetic worship, and creating
                    atmospheres where the Holy Spirit can move freely.
                  </p>
                  <p>
                    Through music, teaching, and ministry, he continues to impact lives and draw believers closer to the
                    heart of God.
                  </p>
                </div>
                
                {/* Additional Information */}
                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Ministry Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      Over 15 years of leading worship across continents, ministering in churches, conferences, and revival meetings.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Musical Background</h3>
                    <p className="text-sm text-muted-foreground">
                      Trained in worship ministry and music production, with a passion for creating songs that usher in God's presence.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Vision</h3>
                    <p className="text-sm text-muted-foreground">
                      To raise up a generation of true worshippers who worship in spirit and truth, transforming nations through worship.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Calling</h3>
                    <p className="text-sm text-muted-foreground">
                      Called to prophetic worship and creating atmospheres where the Holy Spirit can move freely and transform lives.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To create authentic worship experiences that draw believers into intimate fellowship with God, stirring
                revival and transformation through the power of worship and the presence of the Holy Spirit.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
