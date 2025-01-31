'use client';
import { ECategoryAction } from '@/service/actions/categories';
import { Prisma } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { CategoryField } from './CategoryField';

export function Fields(props: {
  categories: Prisma.ProductsCategoryGetPayload<{
    include: { _count: true };
  }>[];
}) {
  const categories = useQuery({
    queryKey: [ECategoryAction.CATEGORY_LIST],
    initialData: props.categories,
  });

  if (categories.data.length === 0)
    return <div className="text-center">Empty</div>;
  return (
    <ul className="grid grid-cols-12 gap-2">
      {categories.data.map((category) => {
        return <CategoryField key={category.id} category={category} />;
      })}
    </ul>
  );
}
