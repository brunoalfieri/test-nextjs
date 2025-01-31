import { ButtonLink } from '@/components/button/link/ButtonLink';
import { AddRounded } from '@mui/icons-material';

export function HeaderProductsTable() {
  return (
    <header className="py-4 grid grid-cols-12 p-4 gap-6">
      <ButtonLink
        href="/products/create"
        variant="solid"
        className="col-span-2"
      >
        <AddRounded /> New Product
      </ButtonLink>
    </header>
  );
}
