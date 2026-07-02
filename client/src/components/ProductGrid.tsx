import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import { categoryLabels } from '@shared/products';
import type { Product } from '@shared/schema';

type ProductCategory = 'single' | 'bouquet' | 'accessory';

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const categories: (ProductCategory | 'all')[] = ['all', 'single', 'bouquet', 'accessory'];

  if (isLoading) return <div className="text-center py-12">Loading products...</div>;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-muted-foreground text-sm sm:text-base">
          Customised orders are most welcomed! Send your queries to our{' '}
          <a
            href="https://www.instagram.com/noolsnneedles?igsh=cGV0bnRoa2pmbGJp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium transition-colors"
          >
            Instagram
          </a>
          .
        </p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            className="rounded-full"
            data-testid={`button-filter-${category}`}
          >
            {categoryLabels[category as keyof typeof categoryLabels]}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
