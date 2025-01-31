import { ORDER_BY } from '@/types/global';
import { IServiceTableResponse } from '@/types/service';
import { Prisma, Products } from '@prisma/client';
import _ from 'lodash';
import { prisma } from '../prisma';

export async function productsTable({
  search,
  page,
  minPrice,
  maxPrice,
  orderBy,
  sortBy,
  pageSize,
}: {
  search?: string;
  page: number;
  minPrice?: string | null;
  maxPrice?: string | null;
  orderBy?: string | null;
  sortBy?: string | null;
  pageSize: number;
}) {
  try {
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
      skip: page === 0 ? 0 : page * pageSize,
      take: pageSize,
      include: {
        category: true,
      },
    });

    const totalCount = await prisma.products.count({
      where: findWithWhere(),
    });

    const totalPages = Math.ceil(totalCount / pageSize);
    return {
      result: products,
      page,
      pageSize,
      totalCount,
      totalPages,
      search,
      sortBy,
      orderBy,
    } as IServiceTableResponse<Products>;
  } catch (error) {
    throw new Error('Error fetching products', { cause: error });
  }
}
