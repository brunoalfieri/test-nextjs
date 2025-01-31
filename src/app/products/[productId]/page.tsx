import { ProductForm } from '@/components/Forms/Product';
import { productsService } from '@/service/actions/products';
import { Header } from './Header';

export default async function ProductUpdate(request: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await request.params;
  const product = await productsService.get({ productId });

  return (
    <main className="grid grid-cols-12 p-10 h-full">
      <Header product={product} />
      <ProductForm initialProduct={product} />
    </main>
  );
}
