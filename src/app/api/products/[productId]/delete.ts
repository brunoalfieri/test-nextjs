import { NextResponse } from 'next/server';
import { prisma } from '../../prisma';
import { productRead } from './read';

export async function productDelete({ productId }: { productId: string }) {
  try {
    await productRead({ productId });
    const deletedProduct = await prisma.products.delete({
      where: { id: Number(productId) },
    });

    return NextResponse.json(deletedProduct, { status: 200 });
  } catch (error) {
    if (error instanceof NextResponse) {
      return error;
    }
    return NextResponse.json(
      { message: 'Error deleting product' },
      { status: 500 }
    );
  }
}
