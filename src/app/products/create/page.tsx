import { ProductForm } from '@/components/Forms/Product';
import { Header } from './Header';

export default function ProductCreate() {
  return (
    <main className="grid grid-cols-12 p-10 h-full">
      <Header />
      <ProductForm />
    </main>
  );
}
