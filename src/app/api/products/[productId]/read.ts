import _ from 'lodash';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../prisma';

export async function productRead(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const productId = parseInt(params.productId, 10);

    if (_.isNaN(productId)) {
      throw NextResponse.json(
        { message: 'Not found productId: ' + productId },
        { status: 404 }
      );
    }

    const product = await prisma.products.findUnique({
      where: { id: productId },
      include: {
        category: true,
      },
    });

    if (!product) {
      throw NextResponse.json(
        { message: 'Not found productId: ' + productId },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    if (error instanceof NextResponse) {
      return error;
    }
    return NextResponse.json(
      { message: 'Error read product' },
      { status: 500 }
    );
  }
}
