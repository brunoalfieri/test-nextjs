import { NextResponse } from 'next/server';
import { prisma } from '../../prisma';

export async function GET() {
  try {
    const mostExpensive = await prisma.products.findFirst({
      orderBy: {
        price: 'desc',
      },
      select: {
        price: true,
      },
    });
    const cheaper = await prisma.products.findFirst({
      orderBy: {
        price: 'asc',
      },
      select: {
        price: true,
      },
    });

    return NextResponse.json(
      {
        result: {
          mostExpensive: mostExpensive?.price ?? 0,
          cheaper: cheaper?.price ?? 0,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching price range products:', error);
    return NextResponse.json(
      { message: 'Error fetching price range products' },
      { status: 500 }
    );
  }
}
