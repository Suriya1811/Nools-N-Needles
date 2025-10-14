import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { images } from '@shared/products';

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
          Handcrafted with Love
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Beautiful woollen flowers and bouquets that last forever. Each piece is carefully handmade to bring joy to your special moments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/products">
            <Button size="lg" className="group" data-testid="button-shop-now">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="backdrop-blur-sm bg-background/30" data-testid="button-our-story">
              Our Story
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
