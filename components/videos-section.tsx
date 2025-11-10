"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Worship Experience 1",
    url: "https://www.facebook.com/share/v/1BJTkA4Qmd/",
    image: "/worship moments 1.jpg",
  },
  {
    id: 2,
    title: "Worship Experience 2",
    url: "https://www.facebook.com/share/v/1FWrPB5aWQ/",
    image: "/worship moments 2.jpg",
  },
  {
    id: 3,
    title: "Worship Experience 3",
    url: "https://www.facebook.com/share/v/19idc2XZxz/",
    image: "/worship moments 3.jpg",
  },
  {
    id: 4,
    title: "Worship Experience 4",
    url: "https://www.facebook.com/share/v/17ceQBwtWP/",
    image: "/worship moments 4.jpg",
  },
  {
    id: 5,
    title: "Worship Experience 5",
    url: "https://www.facebook.com/share/v/1BZxmsWWmD/",
    image: "/worship moments 5.jpg",
  },
  {
    id: 6,
    title: "Worship Experience 6",
    url: "https://www.facebook.com/share/v/1DLBKYhkSq/",
    image: "/worship moments 6.jpg",
  },
  {
    id: 7,
    title: "Worship Experience 7",
    url: "https://www.facebook.com/share/v/1A8mPJpdMf/",
    image: "/worship moments 7.jpg",
  },
]

export function VideosSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

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

        {/* Carousel */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-lg aspect-[4/5] max-w-lg mx-auto">
          {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full group cursor-pointer"
                  >
                    <img
                      src={video.image}
                      alt={video.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 bg-secondary/20"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = '/placeholder.jpg'
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-semibold">Watch on Facebook</span>
                      </div>
                    </div>
                  </a>
              </div>
          ))}
        </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {videos.map((_, i) => (
            <button
              key={i}
                onClick={() => goToSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? "bg-accent w-8" : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
          </div>
      </div>
    </section>
  )
}
