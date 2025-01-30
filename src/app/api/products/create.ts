import { productCreateSchema } from '@/service/actions/products/schema';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '../prisma';

export async function productCreate(request: NextRequest) {
  try {
    const body = await request.json();
    const parsedBody = productCreateSchema.parse(body);

    await prisma.products.create({
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
    });
    return NextResponse.json({ status: 200, message: 'Criou com sucesso ?' });
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

    return NextResponse.json(
      {
        message: 'Error creating product',
      },
      { status: 500 }
    );
  }
}
