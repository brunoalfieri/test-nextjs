'use client';
import { Button } from '@/components/button/default/ButtonDefault';
import {
  ProductCreateSchema,
  productCreateSchema,
} from '@/service/actions/products/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { CategoryField } from './CategoryField';
import { DescriptionField } from './DescriptionField';
import { ImageField } from './ImageField';
import { NameField } from './NameField';
import { PriceField } from './PriceField';
import { productsService } from '@/service/actions/products';

export default function ProductCreate() {
  const methods = useForm<ProductCreateSchema>({
    resolver: zodResolver(productCreateSchema),
    defaultValues: {
      category: {
        id: null,
      },
    },
  });
  const productCreate = productsService.create()

  function ProductCreateSubmit() {
    console.log('Submit!');
  }

  return (
    <section className="grid grid-cols-12">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(ProductCreateSubmit)}
          className="col-span-4 col-start-5 gap-4 flex flex-col"
        >
          <NameField />
          <DescriptionField />
          <ImageField />
          <CategoryField />
          <PriceField />
          <Button className="mt-10">Submit</Button>
        </form>
      </FormProvider>
    </section>
  );
}
