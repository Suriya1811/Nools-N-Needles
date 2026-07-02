import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRoute } from 'wouter';
import type { Product } from '@shared/schema';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
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

export default function ProductDetail() {
  const [, params] = useRoute('/product/:id');
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: [`/api/products/${params?.id}`],
    enabled: !!params?.id,
  });

  const handleBuyNow = () => {
    if (!product) return;
    const productLink = window.location.href;
    const message = `Product link: ${productLink} - I would like to enquire about this product.`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(message).then(() => {
      setIsDialogOpen(true);
    }).catch(() => {
      window.open('https://ig.me/m/noolsnneedles', '_blank');
    });
  };

  const handleOpenInstagram = () => {
    setIsDialogOpen(false);
    window.open('https://ig.me/m/noolsnneedles', '_blank');
  };

  if (isLoading) return <div className="text-center py-24">Loading product...</div>;
  if (error || !product) return <div className="text-center py-24">Product not found.</div>;

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 min-h-screen">
        <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-card rounded-xl overflow-hidden shadow-sm border aspect-square">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4 capitalize text-sm px-3 py-1">
                {product.category}
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <div className="text-3xl font-bold text-primary font-sans">
                ₹{product.price}
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {product.description}
            </p>

            <div className="pt-6 border-t">
              <button 
                onClick={handleBuyNow}
                className="w-full md:w-auto bg-primary text-primary-foreground py-4 px-8 rounded-lg hover:bg-primary/90 flex items-center justify-center gap-2 text-lg font-medium transition-colors shadow-sm"
              >
                <ShoppingBag size={20} /> Buy Now on Instagram
              </button>
              <p className="text-sm text-muted-foreground mt-4">
                Clicking this will copy the product link and open our Instagram profile so you can send us a direct message to order.
              </p>
            </div>
          </div>
        </div>
      </div>

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
