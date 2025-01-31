import { prisma } from '../../prisma';

export async function categoryDelete({ categoryId }: { categoryId: number }) {
  try {
    const updatedCategory = await prisma.productsCategory.delete({
      where: { id: categoryId },
    });

    return updatedCategory;
  } catch (error) {
    throw new Error('Error delete category', { cause: error });
  }
}
