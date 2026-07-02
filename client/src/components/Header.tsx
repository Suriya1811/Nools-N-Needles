import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Flower2, Home, ShoppingBag, Info, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [location] = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/products', label: 'Products', icon: ShoppingBag },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 hover-elevate rounded-md px-2 py-1 -ml-2">
              <Flower2 className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-semibold text-foreground">Nools'N'Needles</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant="ghost"
                    className={location === item.path ? 'bg-secondary' : ''}
                    data-testid={`link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border shadow-lg rounded-full">
        <nav className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.path;
            return (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={`flex flex-col items-center justify-center px-4 py-2 h-auto min-w-[4rem] gap-1 rounded-full transition-all hover:bg-transparent ${
                    isActive ? 'bg-primary/15 text-primary hover:bg-primary/15' : 'text-muted-foreground'
                  }`}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-[10px] font-medium leading-none">{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
