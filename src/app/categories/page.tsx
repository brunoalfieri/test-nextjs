import { categoriesList } from '../api/categories/list';
import { Fields } from './Fields';
import { Header } from './Header';
import { CategoriyModal } from './Modal';

export default async function CategoriesPage() {
  const categories = await categoriesList();

  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="w-full h-full p-10">
        <Fields categories={categories.result} />
      </main>
      <CategoriyModal />
    </div>
  );
}
