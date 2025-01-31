import { FormProductsFilter } from '@/components/Forms/ProductsFilter';

export function Sidebar(props: { cheaper: number; mostExpensive: number }) {
  return (
    <aside className="col-start-1 col-end-2 row-start-1 row-end-3 shadow-md order-1 lg:order-1 md:w-80 p-4 h-full flex flex-col">
      <FormProductsFilter {...props} />
    </aside>
  );
}
