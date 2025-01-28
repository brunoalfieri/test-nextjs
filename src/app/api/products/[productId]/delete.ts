import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../prisma';
import { readProduct } from './read';

export async function deleteProductUnique(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const productId = parseInt(params.productId, 10);

    await readProduct(request, { params });
    const deletedProduct = await prisma.products.delete({
      where: { id: productId },
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
