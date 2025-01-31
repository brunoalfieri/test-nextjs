import { revalidatePath } from 'next/cache';
import { prisma } from '../../prisma';

export async function categoryDelete({ categoryId }: { categoryId: number }) {
  try {
    const updatedCategory = await prisma.productsCategory.delete({
      where: { id: categoryId },
    });

    revalidatePath('/products');
    return updatedCategory;
  } catch (error) {
    throw new Error('Error delete category', { cause: error });
  }
}
