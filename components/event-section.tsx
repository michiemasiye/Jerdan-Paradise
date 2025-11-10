import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function EventSection() {
  return (
    <section id="ministry" className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/worship-concert-crowd-hands-raised-stage-lights-pu.jpg" alt="Worship Event" className="w-full h-full object-cover parallax-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-accent/20 border border-accent rounded-full mb-4">
              <span className="text-accent font-semibold text-sm">UPCOMING EVENT</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              FIRE & GLORY: <span className="text-accent">The Worship Encounter</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Join us for a night of powerful worship, prophetic ministry, and divine encounters. Experience the fire of
              God's presence and the glory of His manifestation.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-5 h-5 text-accent" />
                <span>Saturday, December 15, 2024 at 7:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent" />
                <span>City Convention Center, Main Auditorium</span>
              </div>
            </div>
            
            <div className="pt-6 space-y-3">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                This powerful worship encounter will feature prophetic worship, ministry time, and an opportunity to experience God's presence in a fresh way. Doors open at 6:00 PM. Early arrival recommended.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>• Free Admission</span>
                <span>• Open to All Ages</span>
                <span>• Parking Available</span>
              </div>
            </div>

            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get Tickets
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
