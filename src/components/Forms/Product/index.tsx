'use client';
import { Button } from '@/components/button/default/ButtonDefault';
import { EProductAction, productsService } from '@/service/actions/products';
import {
  ProductCreateSchema,
  productCreateSchema,
  productReadSchema,
  ProductReadSchema,
} from '@/service/actions/products/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { CategoryField } from './CategoryField';
import { DescriptionField } from './DescriptionField';
import { ImageField } from './ImageField';
import { NameField } from './NameField';
import { PriceField } from './PriceField';

export function ProductForm(props: { initialProduct?: ProductReadSchema }) {
  const route = useRouter();
  const methods = useForm<ProductReadSchema | ProductCreateSchema>({
    resolver: zodResolver(
      props.initialProduct ? productReadSchema : productCreateSchema
    ),
    defaultValues: {
      category: {
        id: null,
        label: '',
      },
      ...props.initialProduct,
    },
  });

  const productCreate = useMutation({
    mutationKey: [EProductAction.PRODUCT_CREATE],
    mutationFn: productsService.create,
    onSuccess(data) {
      route.push(data.id.toString());
      toast('Updated successfully!', { type: 'success' });
    },
  });
  const productUpdate = useMutation({
    mutationKey: [EProductAction.PRODUCT_CREATE],
    mutationFn: productsService.update,
    onSuccess() {
      toast('Updated successfully!', { type: 'info' });
    },
  });

  function handleSubmit(product: ProductReadSchema | ProductCreateSchema) {
    if ('id' in product) {
      return productUpdate.mutateAsync({ product });
    } else return productCreate.mutateAsync({ product });
  }
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        className="col-span-10 md:col-span-6 lg:col-span-4 col-start-2 md:col-start-4 lg:col-start-5 gap-4 flex flex-col justify-center"
      >
        <NameField />
        <DescriptionField />
        <ImageField />
        <CategoryField />
        <PriceField />
        <Button
          className="mt-10"
          loading={productCreate.isPending && 'Creating'}
        >
          Submit
        </Button>
      </form>
    </FormProvider>
  );
}
