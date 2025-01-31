import _ from 'lodash';
import { prisma } from '../../prisma';

export async function productRead({ productId }: { productId: string }) {
  try {
    if (_.isNaN(productId)) {
      throw new Error('Not found parameter productId');
    }

    const product = await prisma.products.findUnique({
      where: { id: Number(productId) },
      include: {
        category: true,
      },
    });

    if (!product) {
      throw new Error('Not found productId: ' + productId);
    }

    return product;
  } catch (error) {
    throw new Error('Error read product', { cause: error });
  }
}
