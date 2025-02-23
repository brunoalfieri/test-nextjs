import { ORDER_BY } from '@/types/global';
import { z } from 'zod';
import { categoryReadSchema } from '../categories/schema';

export const productCreateSchema = z.object({
  name: z.string().min(1, { message: 'Required field' }).trim().max(255),
  category: z.object({
    ...categoryReadSchema.shape,
    id: z.number().min(0).nullable(),
  }),
  price: z
    .number()
    .min(1, { message: 'Required field' })
    .max(99999999999, { message: 'Very large value' }),
  description: z.string().min(1, { message: 'Required field' }).max(3000),
  image: z.string().min(1, { message: 'Required field' }).url(),
});

export type ProductCreateSchema = z.infer<typeof productCreateSchema>;

export const productReadSchema = z.object({
  id: z.number().min(0).nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ...productCreateSchema.shape,
});

export type ProductReadSchema = z.infer<typeof productReadSchema>;

export const productUpdateSchema = productCreateSchema;
export type ProductUpdateSchema = z.infer<typeof productUpdateSchema>;

export const deleteProductSchema = z.object({
  id: productReadSchema.shape.id,
});
export type ProductDeleteSchema = z.infer<typeof deleteProductSchema>;

export const productsFilterSchema = z.object({
  search: z.string().optional(),
  minPrice: z.coerce.number(),
  maxPrice: z.coerce.number(),
  sortBy: z.string().nullable(),
  orderBy: z.nativeEnum(ORDER_BY).default(ORDER_BY.ASC),
});

export type ProductsFilterSchema = z.infer<typeof productsFilterSchema>;
