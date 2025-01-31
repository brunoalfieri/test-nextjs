import { prisma } from '../../prisma';

export async function productsPriceRange() {
  try {
    const mostExpensive = await prisma.products.findFirst({
      orderBy: {
        price: 'desc',
      },
      select: {
        price: true,
      },
    });
    const cheaper = await prisma.products.findFirst({
      orderBy: {
        price: 'asc',
      },
      select: {
        price: true,
      },
    });

    return {
      result: {
        mostExpensive: mostExpensive?.price ?? 0,
        cheaper: cheaper?.price ?? 0,
      },
    };
  } catch (error) {
    throw new Error('Error fetching price range products', { cause: error });
  }
}
