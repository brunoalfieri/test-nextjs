import { ORDER_BY } from '@/types/global';
import { Prisma } from '@prisma/client';
import _ from 'lodash';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../prisma';

export async function productsTable(request: NextRequest) {
  try {
    const search = request.nextUrl.searchParams.get('search') || '';
    const page = parseInt(request.nextUrl.searchParams.get('page') || '1', 10);
    const minPrice = request.nextUrl.searchParams.get('minPrice');
    const maxPrice = request.nextUrl.searchParams.get('maxPrice');
    const orderBy = request.nextUrl.searchParams.get('orderBy');
    const sortBy = request.nextUrl.searchParams.get('sortBy');
    const pageSize = parseInt(
      request.nextUrl.searchParams.get('pageSize') || '10',
      10
    );

    function findWithWhere() {
      if (search || (minPrice && maxPrice)) {
        return {
          AND: [
            {
              price: {
                gte:
                  !_.isNaN(Number(minPrice)) &&
                  parseInt(minPrice as string, 10),
              },
            },
            {
              price: {
                lte:
                  !_.isNaN(Number(maxPrice)) &&
                  parseInt(maxPrice as string, 10),
              },
            },
            search && {
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
            },
          ].filter(Boolean),
        } as Prisma.ProductsWhereInput;
      }
    }
    console.log(
      'REQUEST',
      (sortBy && {
        [sortBy]: orderBy ?? ORDER_BY.ASC,
      }) ||
        undefined
    );

    function ruleOrderBy(field: string) {
      if (field === sortBy) {
        return orderBy === ORDER_BY.DESC ? ORDER_BY.DESC : ORDER_BY.ASC;
      } else return undefined;
    }
    const products = await prisma.products.findMany({
      where: findWithWhere(),
      orderBy: {
        name: ruleOrderBy('name'),
        category: ruleOrderBy('category') && {
          name: ruleOrderBy('category'),
        },
        createdAt: ruleOrderBy('createdAt'),
        price: ruleOrderBy('price'),
        description: ruleOrderBy('description'),
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        category: true,
      },
    });

    const totalCount = products.length;

    const totalPages = Math.ceil(totalCount / pageSize);
    return NextResponse.json(
      {
        result: products,
        pagination: {
          page,
          pageSize,
          totalCount,
          totalPages,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { message: 'Error fetching products' },
      { status: 500 }
    );
  }
}
