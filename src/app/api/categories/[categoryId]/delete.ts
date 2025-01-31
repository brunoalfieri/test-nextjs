import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '../../prisma';

export async function categoryDelete(
  request: NextRequest,
  { params }: { params: { categoryId: string } }
) {
  try {
    const { categoryId } = await params;

    const updatedCategory = await prisma.productsCategory.delete({
      where: { id: Number(categoryId) },
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
