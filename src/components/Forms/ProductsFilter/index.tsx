'use client';
import { Button } from '@/components/button/default/ButtonDefault';
import { Typography } from '@/components/typography/Typography';
import {
  productsFilterSchema,
  ProductsFilterSchema,
} from '@/service/actions/products/schema';
import { ORDER_BY } from '@/types/global';
import { zodResolver } from '@hookform/resolvers/zod';
import _ from 'lodash';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MaxPriceField } from './MaxPriceField';
import { MinPriceField } from './MinPriceField';
import { SearchField } from './SearchField';
import { SlidePriceField } from './SlidePriceField';
import { SortField } from './SortField';

export function FormProductsFilter(props: {
  cheaper: number;
  mostExpensive: number;
}) {
  const searchParams = useSearchParams();
  const maxPriceParam = searchParams.get('maxPrice');
  const minPriceParam = searchParams.get('minPrice');
  const minPrice =
    minPriceParam && _.isNaN(parseInt(minPriceParam, 10))
      ? null
      : parseInt(minPriceParam as string, 10);
  const maxPrice =
    maxPriceParam && _.isNaN(parseInt(maxPriceParam, 10))
      ? null
      : parseInt(maxPriceParam as string, 10);
  const methods = useForm<ProductsFilterSchema>({
    resolver: zodResolver(productsFilterSchema),
    defaultValues: {
      search: searchParams.get('search') ?? '',
      maxPrice: maxPrice ?? props.mostExpensive,
      minPrice: minPrice ?? props.cheaper,
      orderBy: (searchParams.get('orderBy') as ORDER_BY) || ORDER_BY.ASC,
      sortBy: searchParams.get('sortBy'),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  function handleFiltersSubmit(data: ProductsFilterSchema) {
    const params = new URLSearchParams();
    _.entries(data).map(([key, value]) => {
      if (value !== null) {
        params.set(key, value.toString());
      }
    });

    window.history.pushState({}, '', `?${params.toString()}`);
  }

  function handleResetFilters() {
    methods.setValue('maxPrice', props.mostExpensive);
    methods.setValue('minPrice', props.cheaper);
    methods.setValue('sortBy', null);
    methods.setValue('orderBy', ORDER_BY.ASC);
    methods.setValue('search', '');
    window.history.pushState({}, '', '?');
  }

  return (
    <FormProvider {...methods}>
      <Typography.Title
        as="h1"
        size="lg"
        weight="bold"
        className="text-center uppercase"
      >
        Front Test
      </Typography.Title>
      <hr className="my-5"></hr>
      <form
        ref={formRef}
        onSubmit={methods.handleSubmit(handleFiltersSubmit)}
        className="flex flex-col gap-4 h-full"
      >
        <Typography.Body as="h2" size="md" weight="light" className="text-left">
          Filters
        </Typography.Body>
        <SearchField />
        <MinPriceField />
        <MaxPriceField />
        <SlidePriceField {...props} />
        <SortField />
        <Button variant="solid" size="md">
          Filter
        </Button>
        <Button
          type="reset"
          onClick={handleResetFilters}
          variant="outline"
          size="md"
          className="mt-auto"
        >
          Reset Filters
        </Button>
      </form>
    </FormProvider>
  );
}
