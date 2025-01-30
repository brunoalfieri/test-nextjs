import { z } from 'zod';

export const productCreateSchema = z.object({
  name: z.string().min(1, { message: 'Required field' }).trim().max(255),
  category: z.object({
    id: z.number().min(0).nullable(),
    label: z.string().min(1).max(32),
    labelOption: z.string().min(1).optional(),
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
  id: z.number().min(0),
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
