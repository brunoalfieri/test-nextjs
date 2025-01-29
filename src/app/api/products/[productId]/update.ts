import { updateProductSchema } from '@/service/actions/product/schema';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '../../prisma';
import { readProduct } from './read';

export async function updateProduct(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const productId = parseInt(params.productId, 10);

    const body = await request.json();
    const parsedBody = updateProductSchema.parse(body);

    await readProduct(request, { params });

    const updatedProduct = await prisma.products.update({
      where: { id: productId },
      data: {
        ...parsedBody,
        category: {
          connectOrCreate: {
            create: { name: parsedBody.category.name },
            where: {
              id: parsedBody.category.id,
            },
          },
        },
      },
      include: {
        category: true,
      },
    });

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: 'Data validation error',
          error: error.errors,
        },
        { status: 400 }
      );
    }
    if (error instanceof NextResponse) {
      return error;
    }
    return NextResponse.json(
      { message: 'Error update product' },
      { status: 500 }
    );
  }
}
