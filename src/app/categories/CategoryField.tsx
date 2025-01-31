'use client';
import { Button } from '@/components/button/default/ButtonDefault';
import { Input } from '@/components/inputs/Input';
import { Typography } from '@/components/typography/Typography';
import { useModal } from '@/providers/ModalProvider';
import {
  categoriesService,
  ECategoryAction,
} from '@/service/actions/categories';
import {
  CategoryReadSchema,
  categoryReadSchema,
} from '@/service/actions/categories/schema';
import { ProductReadSchema } from '@/service/actions/products/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { DeleteOutline, Edit } from '@mui/icons-material';
import { Prisma } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export function CategoryField<
  T extends Prisma.ProductsCategoryGetPayload<{ include: { _count: true } }>
>(props: { category: T }) {
  const queryClient = useQueryClient();
  const methods = useForm<CategoryReadSchema>({
    resolver: zodResolver(categoryReadSchema),
    defaultValues: {
      id: props.category.id,
      label: props.category.name,
    },
  });
  const { openModal } = useModal<T>();

  const categoryUpdate = useMutation({
    mutationKey: [ECategoryAction.CATEGORY_UPDATE, props.category.id],
    mutationFn: categoriesService.update,
    onSuccess() {
      toast('Updated successfully!', { type: 'info' });
    },
  });
  const categoryDelete = useMutation({
    mutationKey: [ECategoryAction.CATEGORY_DELETE, props.category.id],
    mutationFn: categoriesService.delete,
    onSuccess() {
      toast('Delete successfully!', { type: 'error' });
      queryClient.setQueryData(
        [ECategoryAction.CATEGORY_LIST],
        (categories: ProductReadSchema[]) => {
          return categories.filter(
            (category) => category.id !== props.category.id
          );
        }
      );
    },
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((result) =>
          categoryUpdate.mutateAsync(result)
        )}
        className="col-span-6 col-start-4 flex gap-4 mb-5 items-center"
      >
        <Typography.Label as="label">
          #{props.category.id.toString().padStart(3, '0')}
        </Typography.Label>
        <Input.Root className="w-full">
          <Input.Text.Root
            {...methods.register('label')}
            size="sm"
            defaultValue={props.category.name}
          >
            <Input.Text.IconRight
              type="button"
              buttonProps={{ type: 'submit' }}
              icon={Edit}
            />
          </Input.Text.Root>
          <Input.Addons.Helper />
          <Input.Addons.MaxChars maxChars={32} />
        </Input.Root>
        <Button
          type="button"
          variant="solid"
          size={categoryDelete.isPending ? 'md' : 'icon'}
          loading={categoryDelete.isPending && 'Processing'}
          onClick={() =>
            openModal({
              customProps: props.category,
              fnConfirm: () => {
                categoryDelete.mutateAsync({ id: props.category.id });
              },
            })
          }
          className="col-span-1 enabled:hover:scale-110 col-end-13 enabled:!bg-red-500 enabled:!rounded-full transition-all group"
        >
          <DeleteOutline className="group-hover:scale-125 transition-all" />
        </Button>
      </form>
    </FormProvider>
  );
}
