import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(1),
  category: z.object({
    id: z.number().min(1),
    name: z.string().min(1),
  }),
  price: z.number().min(0),
  description: z.string().min(1),
  image: z.string().min(1),
});

export type CreateProductSchema = z.infer<typeof createProductSchema>;

export const readProductSchema = z.object({
  id: z.number().min(0),
  createdAt: z.date(),
  updatedAt: z.date(),
  ...createProductSchema.shape,
});

export type ReadProductSchema = z.infer<typeof readProductSchema>;

export const updateProductSchema = createProductSchema;
export type UpdateProductSchema = CreateProductSchema;

export const deleteProductSchema = z.object({
  id: readProductSchema.shape.id,
});
export type DeleteProductSchema = z.infer<typeof deleteProductSchema>;
