import { NextResponse } from 'next/server';
import { prisma } from '../prisma';

export async function categoriesList() {
  try {
    const categories = await prisma.productsCategory.findMany({
      omit: {
        createdAt: true,
        updatedAt: true,
      },
      include: {
        _count: true,
      },
    });

    return NextResponse.json(
      {
        result: categories,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { message: 'Error fetching categories' },
      { status: 500 }
    );
  }
}
