"use client"

import { Button } from "@/components/ui/button"
import { Youtube } from "lucide-react"
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
                src="/Access Granted.jpg"
                alt="ACCESS GRANTED Album Flyer"
                className="relative w-full rounded-lg shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = '/worship-album-cover-with-golden-light-and-dove.jpg'
                }}
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
                ACCESS <span className="text-accent">GRANTED</span>
              </h2>
              <p className="text-xl text-accent font-semibold">2025</p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                A powerful collection of worship songs that grant access to the presence of God. This album opens the door
                to divine encounters and authentic worship experiences that transform hearts and draw believers closer to the
                throne of grace.
              </p>

              {/* Streaming Platforms */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent hover:bg-accent hover:text-accent-foreground"
                  asChild
                >
                  <a href="https://youtube.com/@jerdanparadise?si=nRT8oWXiHcTS_QIo" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5" />
                  YouTube
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent hover:bg-accent hover:text-accent-foreground"
                  asChild
                >
                  <a href="https://youtube.com/@jerdanparadise827?si=_rrWzPW6oSmm0tSp" target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-5 h-5" />
                    YouTube 2
                  </a>
                </Button>
              </div>

              <Button 
                className="w-full lg:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <a href="/music">View All Albums</a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
