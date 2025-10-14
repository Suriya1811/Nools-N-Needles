import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import { products, categoryLabels, type ProductCategory } from '@shared/products';

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const categories: (ProductCategory | 'all')[] = ['all', 'single', 'bouquet', 'accessory'];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            className="rounded-full"
            data-testid={`button-filter-${category}`}
          >
            {categoryLabels[category]}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
