import { prisma } from '../prisma';

export async function categoriesList() {
  try {
    const categories = await prisma.productsCategory.findMany({
      include: {
        _count: true,
      },
    });
    return {
      result: categories,
    };
  } catch (error) {
    throw new Error('Error fetching categories', { cause: error });
  }
}
