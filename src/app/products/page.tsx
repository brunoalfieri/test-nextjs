import { productsService } from '@/service/actions/products';
import { HeaderProductsTable } from './Header';
import { List } from './List';
import { Sidebar } from './Sidebar';

export default async function Products() {
  const { result } = await productsService.priceRange();
  return (
    <div className="flex flex-col md:grid grid-cols-[max-content,1fr] grid-rows-[max-content,1fr] h-full">
      <Sidebar {...result} />
      <HeaderProductsTable />
      <main className="w-full h-full p-10 overflow-y-auto order-3">
        <List />
      </main>
    </div>
  );
}
