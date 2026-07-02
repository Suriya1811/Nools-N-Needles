const heroImage = 'https://placehold.co/1200x800?text=Hero+Image';
const roseImage = 'https://placehold.co/400x300?text=Rose';
const tulipImage = 'https://placehold.co/400x300?text=Tulip';
const sunflowerImage = 'https://placehold.co/400x300?text=Sunflower';
const daisyImage = 'https://placehold.co/400x300?text=Daisy';
const hibiscusImage = 'https://placehold.co/400x300?text=Hibiscus';
const lavenderImage = 'https://placehold.co/400x300?text=Lavender';
const cherryBlossomImage = 'https://placehold.co/400x300?text=Cherry+Blossom';
const miniBouquetImage = 'https://placehold.co/400x300?text=Mini+Bouquet';
const keychainImage = 'https://placehold.co/400x300?text=Keychain';
const hairClipImage = 'https://placehold.co/400x300?text=Hair+Clip';
const flowerPotImage = 'https://placehold.co/400x300?text=Flower+Pot';
const mediumBouquetImage = 'https://placehold.co/400x300?text=Medium+Bouquet';
const largeBouquetImage = 'https://placehold.co/400x300?text=Large+Bouquet';
const customBouquetImage = 'https://placehold.co/400x300?text=Custom+Bouquet';
const craftingImage = 'https://placehold.co/400x300?text=Crafting';

export const images = {
  hero: heroImage,
  crafting: craftingImage,
};

export type ProductCategory = 'single' | 'bouquet' | 'accessory';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 'single-rose',
    name: 'Single Rose',
    description: 'Simple handmade rose',
    price: 120,
    image: roseImage,
    category: 'single',
  },
  {
    id: 'tulip',
    name: 'Tulip',
    description: 'Soft rounded petals',
    price: 110,
    image: tulipImage,
    category: 'single',
  },
  {
    id: 'sunflower',
    name: 'Sunflower',
    description: 'Bright yellow, cheerful',
    price: 130,
    image: sunflowerImage,
    category: 'single',
  },
  {
    id: 'daisy',
    name: 'Daisy',
    description: 'Small and simple',
    price: 90,
    image: daisyImage,
    category: 'single',
  },
  {
    id: 'hibiscus',
    name: 'Hibiscus',
    description: 'Beautiful large petals',
    price: 150,
    image: hibiscusImage,
    category: 'single',
  },
  {
    id: 'lavender-stick',
    name: 'Lavender Stick',
    description: 'Purple floral stick',
    price: 135,
    image: lavenderImage,
    category: 'single',
  },
  {
    id: 'cherry-blossom',
    name: 'Cherry Blossom (set of 3)',
    description: 'Mini flowers bunch',
    price: 120,
    image: cherryBlossomImage,
    category: 'single',
  },
  {
    id: 'mini-rose',
    name: 'Mini Rose',
    description: 'Small cute rose',
    price: 80,
    image: roseImage,
    category: 'single',
  },
  {
    id: 'mini-bouquet',
    name: 'Mini Bouquet (3 flowers)',
    description: 'Small wrapped bouquet',
    price: 250,
    image: miniBouquetImage,
    category: 'bouquet',
  },
  {
    id: 'medium-bouquet',
    name: 'Medium Bouquet (5-6 flowers)',
    description: 'Gift wrapping & ribbon',
    price: 400,
    image: mediumBouquetImage,
    category: 'bouquet',
  },
  {
    id: 'large-bouquet',
    name: 'Large Bouquet (8-10 flowers)',
    description: 'Premium wrapping',
    price: 1500,
    image: largeBouquetImage,
    category: 'bouquet',
  },
  {
    id: 'customized-bouquet',
    name: 'Customized Bouquet (with name tag)',
    description: 'Personalized colors / message',
    price: 1200,
    image: customBouquetImage,
    category: 'bouquet',
  },
  {
    id: 'flower-keychain',
    name: 'Flower Keychain',
    description: 'Small flower keyring',
    price: 120,
    image: keychainImage,
    category: 'accessory',
  },
  {
    id: 'flower-pot-decor',
    name: 'Flower Pot Decor',
    description: 'Crochet flowers in pot/jar',
    price: 400,
    image: flowerPotImage,
    category: 'accessory',
  },
  {
    id: 'hair-clip-brooch',
    name: 'Hair Clip or Brooch Flower',
    description: 'Single wearable piece',
    price: 80,
    image: hairClipImage,
    category: 'accessory',
  },
];

export const addOns: AddOn[] = [
  {
    id: 'gift-tag',
    name: 'Small Gift Tag',
    price: 10,
  },
  {
    id: 'gift-box',
    name: 'Simple Gift Box',
    price: 30,
  },
  {
    id: 'led-light',
    name: 'LED Light in Bouquet',
    price: 60,
  },
  {
    id: 'custom-color',
    name: 'Custom Color Yarn',
    price: 20,
  },
];

export const categoryLabels: Record<ProductCategory | 'all', string> = {
  all: 'All Products',
  single: 'Single Flowers',
  bouquet: 'Bouquets',
  accessory: 'Accessories',
};
