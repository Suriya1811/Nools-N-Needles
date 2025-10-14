import { images } from '@shared/products';
import { Heart, Sparkles, Gift } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-secondary/20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Nools'N'Needles
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafting beautiful moments, one flower at a time
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={images.crafting}
              alt="Crafting process"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nools'N'Needles began with a simple passion for creating beautiful, lasting memories. 
              Each woollen flower is meticulously handcrafted using premium yarn and traditional 
              crochet techniques passed down through generations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that flowers should bring joy that lasts forever. That's why we create 
              woollen blooms that never wilt, perfect for celebrating life's special moments or 
              adding a touch of handmade charm to your home.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold">Made with Love</h3>
              <p className="text-muted-foreground">
                Every stitch is crafted with care and attention to detail, ensuring each piece is special.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold">Quality Materials</h3>
              <p className="text-muted-foreground">
                We use only the finest woollen yarn to create flowers that are soft, durable, and beautiful.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold">Perfect Gifts</h3>
              <p className="text-muted-foreground">
                Ideal for any occasion - birthdays, anniversaries, or just to show someone you care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
          Custom Orders Welcome
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Have a specific vision in mind? We'd love to bring it to life! We offer custom bouquets 
          with your choice of colors, flowers, and personalized name tags. Each custom piece is 
          created just for you, making it truly one-of-a-kind.
        </p>
      </section>
    </div>
  );
}
