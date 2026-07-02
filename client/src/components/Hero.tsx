import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import heroImage from '@/image/hero.png';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] overflow-hidden bg-[#f8f5f1] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-right"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Optional subtle gradient for better text readability on mobile if needed, though the image seems light enough on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8f5f1]/90 md:from-[#f8f5f1]/40 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="max-w-xl text-left">
          <p className="text-[#db7093] font-semibold tracking-widest text-xs md:text-sm uppercase mb-3">
            Made by hand, from the heart
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#3d2b2c] mb-4 leading-[1.1]">
            Handcrafted<br />with Love
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
            Beautiful woollen flowers and bouquets that last forever. Each piece is carefully handmade to bring joy to your special moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link href="/products">
              <Button size="lg" className="group w-full sm:w-auto bg-[#de6b8f] hover:bg-[#c95b7d] text-white px-8" data-testid="button-shop-now">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-[#f8f5f1] hover:bg-[#f0ece6] text-[#3d2b2c] border-transparent shadow-sm px-8" data-testid="button-our-story">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
