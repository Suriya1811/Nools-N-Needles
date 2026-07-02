import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@shared/schema';
import { ShoppingBag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLocation } from 'wouter';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the card click event
    e.preventDefault();
    const productLink = `${window.location.origin}/product/${product.id}`;
    const message = `Product link: ${productLink} - I would like to enquire about this product.`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(message).then(() => {
      setIsDialogOpen(true);
    }).catch(() => {
      // Fallback if clipboard fails
      window.open('https://ig.me/m/noolsnneedles', '_blank');
    });
  };

  const handleOpenInstagram = () => {
    setIsDialogOpen(false);
    window.open('https://ig.me/m/noolsnneedles', '_blank');
  };

  const handleCardClick = () => {
    setLocation(`/product/${product.id}`);
  };

  return (
    <>
      <Card 
        onClick={handleCardClick}
        className="overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] duration-200 flex flex-col group cursor-pointer" 
        data-testid={`card-product-${product.id}`}
      >
        <div className="aspect-square overflow-hidden bg-card">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-3 sm:p-4 flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-1 sm:gap-0 mb-1 sm:mb-2">
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground line-clamp-1" data-testid={`text-product-name-${product.id}`}>
              {product.name}
            </h3>
            <Badge variant="secondary" className="capitalize shrink-0 text-[10px] sm:text-xs px-1.5 py-0 sm:px-2.5 sm:py-0.5">
              {product.category}
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2" data-testid={`text-product-description-${product.id}`}>
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="p-3 sm:p-4 pt-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-4">
          <span className="text-lg sm:text-2xl font-bold text-primary font-sans shrink-0" data-testid={`text-product-price-${product.id}`}>
            ₹{product.price}
          </span>
          <button 
            onClick={handleBuyNow}
            className="flex-1 bg-primary text-primary-foreground py-1.5 sm:py-2 px-2 sm:px-3 rounded-md hover:bg-primary/90 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium transition-colors"
          >
            <ShoppingBag size={14} className="sm:w-4 sm:h-4" /> Buy Now
          </button>
        </CardFooter>
      </Card>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Ready to Order?</AlertDialogTitle>
            <AlertDialogDescription>
              The product link and enquire message have been copied to your clipboard. Just paste it into the chat and click send, we will get back to you ASAP!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleOpenInstagram}>Open Instagram</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
