import { categoriesService } from '@/service/actions/categories';
import { Fields } from './Fields';
import { Header } from './Header';
import { CategoriyModal } from './Modal';

export default async function CategoriesPage() {
  const categories = await categoriesService.list();

  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="w-full h-full p-10">
        <Fields categories={categories} />
      </main>
      <CategoriyModal />
    </div>
  );
}
