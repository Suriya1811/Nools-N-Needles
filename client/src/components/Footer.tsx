import { Link } from 'wouter';
import { Flower2, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-secondary/20 border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flower2 className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-semibold">Nools'N'Needles</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Handcrafted woollen flowers and bouquets made with love. Each piece is unique and special.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col items-start space-y-2">
              <Link href="/"><Button variant="ghost" className="p-0 h-auto hover:bg-transparent" data-testid="link-footer-home">Home</Button></Link>
              <Link href="/products"><Button variant="ghost" className="p-0 h-auto hover:bg-transparent" data-testid="link-footer-products">Products</Button></Link>
              <Link href="/about"><Button variant="ghost" className="p-0 h-auto hover:bg-transparent" data-testid="link-footer-about">About</Button></Link>
              <Link href="/contact"><Button variant="ghost" className="p-0 h-auto hover:bg-transparent" data-testid="link-footer-contact">Contact</Button></Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="mailto:noolsnneedles@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" data-testid="link-email">
                <Mail className="h-4 w-4" />
                <span className="text-sm">noolsnneedles@gmail.com</span>
              </a>
              <a href="https://wa.me/919597478911" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" data-testid="link-whatsapp-footer">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 9597478911</span>
              </a>
              <div className="flex gap-3 pt-2">
                <Button variant="outline" size="icon" className="rounded-full" data-testid="button-instagram">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" data-testid="button-facebook">
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Nools'N'Needles. Handmade with love.</p>
        </div>
      </div>
    </footer>
  );
}
