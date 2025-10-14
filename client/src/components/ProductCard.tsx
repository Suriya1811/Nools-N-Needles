import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@shared/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] duration-200" data-testid={`card-product-${product.id}`}>
      <div className="aspect-square overflow-hidden bg-card">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-1" data-testid={`text-product-name-${product.id}`}>
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3" data-testid={`text-product-description-${product.id}`}>
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between gap-2">
        <span className="text-2xl font-bold text-primary font-sans" data-testid={`text-product-price-${product.id}`}>
          ₹{product.price}
        </span>
        <Badge variant="secondary" className="capitalize">
          {product.category}
        </Badge>
      </CardFooter>
    </Card>
  );
}
