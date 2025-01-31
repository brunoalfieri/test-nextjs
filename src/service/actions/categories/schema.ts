import { z } from 'zod';

export const categoryReadSchema = z.object({
  id: z.number().min(0),
  label: z.string().min(1).max(32),
  labelOption: z.string().min(1).optional(),
});
export type CategoryReadSchema = z.infer<typeof categoryReadSchema>;

export const categoryUpdateSchema = z.object({
  label: z.string().min(1).max(32),
});
export type CategoryUpdateSchema = z.infer<typeof categoryUpdateSchema>;

export const categoryDeleteSchema = z.object({
  id: z.number().min(0),
});
export type CategoryDeleteSchema = z.infer<typeof categoryDeleteSchema>;
