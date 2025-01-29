import { Products } from '@prisma/client';

export function formatPriceProduct(product: Products) {
  return {
    ...product,
    price: product.price.toString(),
  };
}
