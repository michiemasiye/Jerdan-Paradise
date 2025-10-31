import { Button } from "@/components/ui/button"
import { Music, Youtube, Apple, SproutIcon as Spotify } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AlbumSection() {
  return (
    <section id="music" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Album Cover */}
          <ScrollReveal direction="left">
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/20 rounded-lg blur-3xl group-hover:bg-accent/30 transition-all duration-500" />
              <img
                src="/worship-album-cover-with-golden-light-and-dove.jpg"
                alt="Latest Album"
                className="relative w-full rounded-lg shadow-2xl"
              />
            </div>
          </ScrollReveal>

          {/* Album Info */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                <span className="text-accent font-semibold text-sm">LATEST ALBUM</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
                Heaven's <span className="text-accent">Atmosphere</span>
              </h2>
              <p className="text-xl text-accent font-semibold">2024</p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                An invitation into the throne room of grace. Heaven's Atmosphere is a collection of worship anthems that
                create space for encounter with the living God. Each song is a declaration of His majesty and an
                invitation to experience His presence in a fresh way.
              </p>

              {/* Streaming Platforms */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent hover:bg-accent hover:text-accent-foreground"
                >
                  <Youtube className="w-5 h-5" />
                  YouTube
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent hover:bg-accent hover:text-accent-foreground"
                >
                  <Apple className="w-5 h-5" />
                  Apple Music
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent hover:bg-accent hover:text-accent-foreground"
                >
                  <Spotify className="w-5 h-5" />
                  Spotify
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent hover:bg-accent hover:text-accent-foreground"
                >
                  <Music className="w-5 h-5" />
                  Amazon
                </Button>
              </div>

              <Button className="w-full lg:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                View All Albums
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
