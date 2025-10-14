import ProductCard from '../ProductCard';
import { products } from '@shared/products';

export default function ProductCardExample() {
  return <ProductCard product={products[0]} />;
}
