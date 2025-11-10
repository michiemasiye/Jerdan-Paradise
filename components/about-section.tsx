import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Scripture */}
          <ScrollReveal direction="left">
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-12 rounded-lg border border-accent/20">
              <blockquote className="space-y-6">
                <p className="font-serif text-2xl md:text-3xl leading-relaxed text-pretty">
                  "But the hour is coming, and is now here, when the true worshipers will worship the Father in spirit
                  and truth, for the Father is seeking such people to worship him."
                </p>
                <footer className="text-accent font-semibold text-lg">— JOHN 4:23-24</footer>
              </blockquote>
            </div>
          </ScrollReveal>

          {/* Right Side - Bio */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
                A Heart for <span className="text-accent">True Worship</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Minister Jerdan Paradise is a worship leader, songwriter, and revivalist with a passion for creating
                  atmospheres where God's presence dwells. With over a decade of ministry experience, Jerdan has led
                  worship across nations, seeing countless lives transformed through the power of authentic worship.
                </p>
                <p>
                  Born with a gift for music and a calling to ministry, Jerdan began leading worship at age 15. Since
                  then, the journey has been marked by powerful encounters with God, birthing songs that have become
                  anthems in churches worldwide. Jerdan's music blends contemporary sounds with timeless truths,
                  creating a unique worship experience.
                </p>
                <p>
                  Beyond the stage, Jerdan is committed to raising up the next generation of worshipers, teaching that
                  worship is not just a song but a lifestyle of surrender and devotion to Jesus Christ.
                </p>
              </div>
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <a href="/about">More About Jerdan</a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
