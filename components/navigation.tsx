"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium hover:text-accent transition-colors ${isActive("/") ? "text-accent" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium hover:text-accent transition-colors ${isActive("/about") ? "text-accent" : ""}`}
            >
              About
            </Link>
            <Link
              href="/music"
              className={`text-sm font-medium hover:text-accent transition-colors ${isActive("/music") ? "text-accent" : ""}`}
            >
              Music
            </Link>
          </div>

          {/* Center Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 z-10">
            <div className="bg-background/95 backdrop-blur-sm px-3 py-2 rounded-lg border border-accent/20 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JP%20Logo-78ciYDM8mC7ciXIG4m9A81reEhYlJN.png"
                alt="Jerdan Paradise Logo"
                width={150}
                height={75}
                className="h-16 w-auto"
                priority
              />
            </div>
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/ministry"
              className={`text-sm font-medium hover:text-accent transition-colors ${isActive("/ministry") ? "text-accent" : ""}`}
            >
              Ministry
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium hover:text-accent transition-colors ${isActive("/blog") ? "text-accent" : ""}`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium hover:text-accent transition-colors ${isActive("/contact") ? "text-accent" : ""}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 space-y-4">
            <Link
              href="/"
              className={`block text-sm font-medium hover:text-accent transition-colors ${isActive("/") ? "text-accent" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block text-sm font-medium hover:text-accent transition-colors ${isActive("/about") ? "text-accent" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/music"
              className={`block text-sm font-medium hover:text-accent transition-colors ${isActive("/music") ? "text-accent" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Music
            </Link>
            <Link
              href="/ministry"
              className={`block text-sm font-medium hover:text-accent transition-colors ${isActive("/ministry") ? "text-accent" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Ministry
            </Link>
            <Link
              href="/blog"
              className={`block text-sm font-medium hover:text-accent transition-colors ${isActive("/blog") ? "text-accent" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`block text-sm font-medium hover:text-accent transition-colors ${isActive("/contact") ? "text-accent" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
