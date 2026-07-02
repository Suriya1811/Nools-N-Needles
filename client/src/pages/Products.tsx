import ProductGrid from '@/components/ProductGrid';
import AddOns from '@/components/AddOns';
import bannerImage from '@/image/banner.png';

export default function Products() {
  return (
    <div className="min-h-screen">
      <section className="relative w-full py-16 md:py-24 overflow-hidden flex items-center bg-[#f8f5f1]">
        <div
          className="absolute inset-0 bg-cover bg-[center_top] md:bg-center"
          style={{ backgroundImage: `url(${bannerImage})` }}
        />
        <div className="absolute inset-0 bg-[#f8f5f1]/40" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#3d2b2c] mb-4 drop-shadow-sm">
            Our Products
          </h1>
          <p className="text-lg text-[#3d2b2c]/80 font-medium max-w-2xl mx-auto drop-shadow-sm">
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
