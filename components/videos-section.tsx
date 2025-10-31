"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState } from "react"

const videos = [
  {
    id: 1,
    title: "Holy Ground - Minister Jerdan Paradise",
    embedId: "dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Overflow - Live Worship Session",
    embedId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Presence - Minister Jerdan Paradise",
    embedId: "dQw4w9WgXcQ",
  },
]

export function VideosSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section id="videos" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Worship <span className="text-accent">Experiences</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Step into the atmosphere of worship and experience the presence of God through these powerful moments.
            </p>
          </div>
        </ScrollReveal>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {videos.map((video, index) => (
            <ScrollReveal key={video.id} delay={index * 100}>
              <div className="group relative aspect-video rounded-lg overflow-hidden bg-secondary shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? "bg-accent w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* More Videos Button */}
        <ScrollReveal>
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              MORE VIDEOS
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
