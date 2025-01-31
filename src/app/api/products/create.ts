import { productCreateSchema } from '@/service/actions/products/schema';
import { z } from 'zod';
import { prisma } from '../prisma';

export async function productCreate({ body }: { body: object }) {
  try {
    const parsedBody = productCreateSchema.parse(body);

    const product = await prisma.products.create({
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
    });
    return product;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error('Data validation error', {
        cause: error.errors,
      });
    }

    throw new Error('Error creating product', {
      cause: error,
    });
  }
}
