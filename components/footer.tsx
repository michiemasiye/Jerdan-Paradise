import { Facebook, Instagram, Twitter, Youtube, Mail, Music, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JP%20Logo-78ciYDM8mC7ciXIG4m9A81reEhYlJN.png"
              alt="Jerdan Paradise Logo"
              width={150}
              height={75}
              className="h-16 w-auto"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Stirring revival through worship and leading believers into authentic encounters with God.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">CONTACT</h3>
            <div className="space-y-2">
              <a
                href="mailto:paradisejerdan@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">paradisejerdan@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">CONNECT</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/share/1EWza53Qta/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/jerdan_paradise?igsh=MTNtZzl1YTZ1a3k5ZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@jerdan.paradise?_r=1&_t=ZM-917EjoZHpRE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Stream */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">STREAM</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://youtube.com/@jerdanparadise?si=nRT8oWXiHcTS_QIo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="YouTube Channel 1"
                title="YouTube @jerdanparadise"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com/@jerdanparadise827?si=_rrWzPW6oSmm0tSp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="YouTube Channel 2"
                title="YouTube @jerdanparadise827"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="https://music.apple.com/artist/jerdan-paradise"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Apple Music"
              >
                <Music className="w-5 h-5" />
              </Link>
              <Link
                href="https://open.spotify.com/artist/jerdanparadise"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Spotify"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center space-y-2">
          <p className="text-sm text-muted-foreground">© 2025 Minister Jerdan Paradise. All rights reserved.</p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Built by Michelle Masiyemvura
          </p>
        </div>
      </div>
    </footer>
  )
}
