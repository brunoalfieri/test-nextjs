import { Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../prisma';

export async function tableProducts(request: NextRequest) {
  try {
    const search = request.nextUrl.searchParams.get('search') || '';
    const page = parseInt(request.nextUrl.searchParams.get('page') || '1', 10);
    const pageSize = parseInt(
      request.nextUrl.searchParams.get('pageSize') || '10',
      10
    );

    function findWithWhere() {
      if (search) {
        return {
          OR: [
            {
              name: {
                contains: search,
              },
            },
            {
              description: {
                contains: search,
              },
            },
            {
              category: {
                name: search,
              },
            },
          ],
        } as Prisma.ProductsWhereInput;
      }
    }
    const products = await prisma.products.findMany({
      where: findWithWhere(),
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        category: true,
      },
      omit: {
        createdAt: true,
        updatedAt: true,
      },
    });

    const totalCount = products.length;

    const totalPages = Math.ceil(totalCount / pageSize);

    return NextResponse.json({
      status: 200,
      data: products,
      pagination: {
        page,
        pageSize,
        totalCount,
        totalPages,
      },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { message: 'Error fetching products' },
      { status: 500 }
    );
  }
}
