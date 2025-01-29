import { AddRounded } from '@mui/icons-material';
import { ButtonLink } from '../button/link/ButtonLink';
export function HeaderProductsTable() {
  return (
    <header className="py-4 grid grid-cols-12">
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
