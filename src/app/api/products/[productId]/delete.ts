import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../prisma';
import { productRead } from './read';

export async function productDelete(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const productId = parseInt(await params.productId, 10);

    await productRead(request, { params });
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
