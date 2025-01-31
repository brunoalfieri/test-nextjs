import { categoryUpdateSchema } from '@/service/actions/categories/schema';
import { z } from 'zod';
import { prisma } from '../../prisma';

export async function categoryUpdate({
  body,
  categoryId,
}: {
  body: object;
  categoryId: number;
}) {
  try {
    const parsedBody = categoryUpdateSchema.parse(body);

    const updatedCategory = await prisma.productsCategory.update({
      where: { id: categoryId },
      data: {
        name: parsedBody.label,
      },
      include: {
        _count: true,
      },
    });

    return updatedCategory;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error('Data validation error', {
        cause: error.errors,
      });
    }
    throw new Error('Error update category', { cause: error });
  }
}
