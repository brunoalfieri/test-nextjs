import { productRead } from '@/app/api/products/[productId]/read';
import { ProductForm } from '@/components/Forms/Product';
import { redirect } from 'next/navigation';
import { Header } from './Header';

export default async function ProductUpdate(request: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await request.params;
  const product = await productRead({ productId })
    .then((result) => {
      return {
        ...result,
        category: {
          ...result,
          label: result.category.name,
        },
      };
    })
    .catch(() => {
      redirect('/products');
    });

  return (
    <main className="grid grid-cols-12 p-10 h-full">
      <Header product={product} />
      <ProductForm initialProduct={product} />
    </main>
  );
}
