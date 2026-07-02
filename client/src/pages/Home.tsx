import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import AddOns from '@/components/AddOns';
import { useQuery } from '@tanstack/react-query';
import type { Product } from '@shared/schema';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function Home() {
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <Hero />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our handcrafted woollen flowers, each made with care and attention to detail.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-8">Loading products...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="text-center">
          <Link href="/products">
            <Button size="lg" variant="outline" className="group" data-testid="button-view-all">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AddOns />
      </section>

      <section className="bg-secondary/20 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-3">
              <div className="text-4xl">🌸</div>
              <h3 className="font-serif text-xl font-semibold">Handcrafted</h3>
              <p className="text-muted-foreground text-sm">
                Each flower is carefully handmade with premium woollen yarn
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">💝</div>
              <h3 className="font-serif text-xl font-semibold">Long Lasting</h3>
              <p className="text-muted-foreground text-sm">
                Unlike real flowers, our creations last forever
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">🎨</div>
              <h3 className="font-serif text-xl font-semibold">Customizable</h3>
              <p className="text-muted-foreground text-sm">
                Choose your favorite colors and add personal touches
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
