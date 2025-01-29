import { HeaderProductsTable } from '@/components/header/ProductsTable';
import '@/mock/index';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-full p-10">
      <HeaderProductsTable />
      {children}
    </main>
  );
}
