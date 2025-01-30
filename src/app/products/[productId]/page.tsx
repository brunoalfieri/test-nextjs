import { ProductForm } from '@/components/Forms/Product';
import { productsService } from '@/service/actions/products';
import { Header } from './Header';

export default async function ProductUpdate(request: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await request.params;
  const product = await productsService.get({ productId });
  console.log(product);
  return (
    <main className="grid grid-cols-12 p-10 h-full">
      <Header productId={productId} />
      <ProductForm initialProduct={product} />
    </main>
  );
}
