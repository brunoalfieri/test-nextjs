import { productUpdateSchema } from '@/service/actions/products/schema';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { prisma } from '../../prisma';
import { productRead } from './read';

export async function productUpdate({
  productId,
  body,
}: {
  productId: string;
  body: object;
}) {
  try {
    const parsedBody = productUpdateSchema.parse(body);

    await productRead({ productId });

    const updatedProduct = await prisma.products.update({
      where: { id: Number(productId) },
      data: {
        ...parsedBody,
        category: {
          connectOrCreate: {
            create: { name: parsedBody.category.label },
            where: {
              id: parsedBody.category.id ?? 0,
            },
          },
        },
      },
      include: {
        category: true,
      },
    });

    revalidatePath('/products');
    return updatedProduct;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error('Data validation error', {
        cause: error.errors,
      });
    }
    throw new Error('Error update product', {
      cause: error,
    });
  }
}
