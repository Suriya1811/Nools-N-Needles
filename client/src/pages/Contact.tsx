import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="bg-secondary/20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or ready to order? We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of the following channels. We typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="hover-elevate transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:noolsnneedles@gmail.com" 
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        data-testid="link-contact-email"
                      >
                        noolsnneedles@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp / Phone</h3>
                      <a 
                        href="https://wa.me/919597478911" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        data-testid="link-contact-whatsapp"
                      >
                        +91 9597478911
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Serving customers across India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Send us a Message
                </h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
