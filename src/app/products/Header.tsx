'use client';
import { ButtonLink } from '@/components/button/link/ButtonLink';
import { EProductAction } from '@/service/actions/products';
import { IServiceTableResponse } from '@/types/service';
import { AddRounded, Sell } from '@mui/icons-material';
import { TablePagination } from '@mui/material';
import { Prisma } from '@prisma/client';
import { useQueryClient } from '@tanstack/react-query';
import _ from 'lodash';
import { useEffect, useState } from 'react';

export function HeaderProductsTable() {
  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
    count: number;
  }>({
    count: 10,
    page: 0,
    pageSize: 10,
  });
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.getQueryCache().subscribe(({ query }) => {
      if (
        _.isArray(query.queryKey) &&
        query.queryKey.includes(EProductAction.PRODUCTS_TABLE) &&
        query.state.data
      ) {
        const result: IServiceTableResponse<
          Prisma.ProductsGetPayload<{
            include: {
              category: true;
            };
          }>,
          { totalCount: number }
        > = query.state.data;
        setPagination({
          count: result.totalCount,
          page: Number(result.page),
          pageSize: Number(result.pageSize),
        });
      }
    });
  }, []);

  function handlePaginationFilter(
    field: 'pageSize' | 'page',
    value: string | number
  ) {
    const params = new URLSearchParams(window.location.search);
    params.set(field, value.toString());
    window.history.pushState({}, '', `?${params.toString()}`);
  }

  return (
    <header className="py-4 lg:order-2 order-2 flex flex-col p-4 gap-6">
      <div className="flex gap-4 w-max">
        <ButtonLink
          href="/products/create"
          variant="solid"
          className="col-span-3 xl:col-span-2"
        >
          <AddRounded /> New Product
        </ButtonLink>
        <ButtonLink
          href="/categories"
          variant="outline"
          className="col-span-3 xl:col-span-2"
        >
          <Sell /> Categories
        </ButtonLink>
      </div>

      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 15, 20, 50, 100]}
        count={pagination.count}
        page={pagination.page}
        onPageChange={(_, newValue) => handlePaginationFilter('page', newValue)}
        rowsPerPage={pagination.pageSize}
        onRowsPerPageChange={(e) => {
          console.log(e);
          handlePaginationFilter('pageSize', e.target.value);
        }}
      />
    </header>
  );
}
