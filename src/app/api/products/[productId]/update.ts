import { productUpdateSchema } from '@/service/actions/products/schema';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '../../prisma';
import { productRead } from './read';

export async function productUpdate(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const productId = parseInt(params.productId, 10);

    const body = await request.json();
    const parsedBody = productUpdateSchema.parse(body);

    await productRead(request, { params });

    const updatedProduct = await prisma.products.update({
      where: { id: productId },
      data: {
        ...parsedBody,
        category: {
          connectOrCreate: {
            create: { name: parsedBody.category.label },
            where: {
              id: parsedBody.category.id ?? undefined,
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
