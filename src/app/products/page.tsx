import { Suspense } from 'react';
import { productsPriceRange } from '../api/products/price-range/priceRange';
import { HeaderProductsTable } from './Header';
import { List } from './List';
import { Sidebar } from './Sidebar';

export default async function Products() {
  async function getPriceRange() {
    'use server';
    return productsPriceRange();
  }
  const { result } = await getPriceRange();
  return (
    <div className="flex flex-col md:grid grid-cols-[max-content,1fr] grid-rows-[max-content,1fr] h-full">
      <Sidebar {...result} />
      <HeaderProductsTable />
      <main className="w-full h-full p-10 overflow-y-auto order-3">
        <Suspense fallback="Loading...">
          <List />
        </Suspense>
      </main>
    </div>
  );
}
