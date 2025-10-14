import ProductGrid from '@/components/ProductGrid';
import AddOns from '@/components/AddOns';

export default function Products() {
  return (
    <div className="min-h-screen">
      <section className="bg-secondary/20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of handmade woollen flowers and bouquets. Each piece is unique and made with love.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <ProductGrid />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <AddOns />
      </section>
    </div>
  );
}
