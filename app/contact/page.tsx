import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Mail, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden min-h-[60vh] md:min-h-[70vh]">
        <div className="container mx-auto px-6 py-24 md:py-32 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-center text-foreground/90 max-w-3xl mx-auto">
            Let's connect and worship together
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <ScrollReveal>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:paradisejerdan@gmail.com"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        paradisejerdan@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">Available for ministry worldwide</p>
                      <p className="text-sm text-muted-foreground mt-1">Based in: International</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <h3 className="font-semibold text-lg">Booking Information</h3>
                    <p className="text-sm text-muted-foreground">
                      For booking inquiries, ministry invitations, or speaking engagements, please contact us through the form below or email directly.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We're available for:
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                      <li>Worship concerts and events</li>
                      <li>Church services and conferences</li>
                      <li>Revival meetings</li>
                      <li>Worship workshops and training</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={200}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
