'use client';
import { Card } from '@/components/card';
import { EProductAction, productsService } from '@/service/actions/products';
import { ORDER_BY } from '@/types/global';
import { Skeleton } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import _ from 'lodash';
import { useSearchParams } from 'next/navigation';

export function List() {
  const searchParams = useSearchParams();
  const { isLoading, data } = useQuery({
    queryKey: [
      EProductAction.PRODUCTS_TABLE,
      searchParams.get('search'),
      searchParams.get('page'),
      searchParams.get('pageSize'),
      searchParams.get('minPrice'),
      searchParams.get('maxPrice'),
      searchParams.get('orderBy'),
      searchParams.get('sortBy'),
    ],
    queryFn: (context) =>
      productsService.table({
        context,
        params: {
          page: searchParams.get('page') ?? 0,
          pageSize: searchParams.get('pageSize') ?? 10,
          search: searchParams.get('search'),
          minPrice: searchParams.get('minPrice'),
          maxPrice: searchParams.get('maxPrice'),
          orderBy: searchParams.get('orderBy') as ORDER_BY | null,
          sortBy: searchParams.get('sortBy'),
        },
      }),
  });

  if (isLoading) {
    const total = Number(searchParams.get('pageSize')) || 10;
    return (
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {_.times(total).map((index) => {
          return (
            <Skeleton
              key={index}
              width="100%"
              height={500}
              variant="rectangular"
              className="rounded-md"
            />
          );
        })}
      </ul>
    );
  }

  if (data?.result.length === 0)
    return <div className="text-center">Empty</div>;
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
      {data?.result.map((product) => {
        return (
          <Card.Root
            key={product.id}
            as="li"
            className="h-[500px]"
            href={`/products/${product.id}`}
          >
            <Card.Image src={product.image} alt="Imagem ilustrativa" />
            <Card.Title>{product.name}</Card.Title>
            <Card.Description>{product.description}</Card.Description>
            <Card.Price value={product.price} oldValue={200000} />
            <Card.Category>{product.category.label}</Card.Category>
          </Card.Root>
        );
      })}
    </ul>
  );
}
