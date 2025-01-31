import { revalidatePath } from 'next/cache';
import { prisma } from '../../prisma';
import { productRead } from './read';

export async function productDelete({ productId }: { productId: string }) {
  try {
    await productRead({ productId });
    const deletedProduct = await prisma.products.delete({
      where: { id: Number(productId) },
    });

    revalidatePath('/products');
    return deletedProduct;
  } catch (error) {
    throw new Error('Error read product', { cause: error });
  }
}
