import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { addOns } from '@shared/products';
import { Plus } from 'lucide-react';

export default function AddOns() {
  return (
    <div className="bg-secondary/30 rounded-lg p-6 md:p-8">
      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
        Optional Add-ons
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {addOns.map((addon) => (
          <Card key={addon.id} className="hover-elevate transition-all duration-200" data-testid={`card-addon-${addon.id}`}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Plus className="h-4 w-4 text-accent" />
                {addon.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="outline" className="text-base font-bold" data-testid={`text-addon-price-${addon.id}`}>
                +₹{addon.price}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
