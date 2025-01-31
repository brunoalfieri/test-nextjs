import { categoryUpdateSchema } from '@/service/actions/categories/schema';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '../../prisma';

export async function categoryUpdate(
  request: NextRequest,
  { params }: { params: { categoryId: string } }
) {
  try {
    const { categoryId } = await params;

    const body = await request.json();
    const parsedBody = categoryUpdateSchema.parse(body);

    const updatedCategory = await prisma.productsCategory.update({
      where: { id: Number(categoryId) },
      data: {
        name: parsedBody.label,
      },
      include: {
        _count: true,
      },
    });

    return NextResponse.json(updatedCategory, { status: 200 });
  } catch (error) {
    console.error(error);

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
      { message: 'Error update category' },
      { status: 500 }
    );
  }
}
