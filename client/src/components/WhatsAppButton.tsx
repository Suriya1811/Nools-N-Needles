import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/919597478911', '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleClick}
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-xl hover:scale-110 transition-transform"
      data-testid="button-whatsapp-float"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}
