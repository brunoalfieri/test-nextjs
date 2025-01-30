import { ButtonLink } from '@/components/button/link/ButtonLink';
import { Typography } from '@/components/typography/Typography';
import { ArrowBackIosNew } from '@mui/icons-material';

export function Header() {
  return (
    <header className="col-span-12 text-center grid-cols-12 grid">
      <ButtonLink
        href="/products"
        variant="text"
        size="icon"
        className="col-span-1 hover:scale-110 !rounded-full transition-all group"
      >
        <ArrowBackIosNew className="group-hover:scale-125 transition-all" />
      </ButtonLink>
      <Typography.Title as="h1" className="col-span-4 col-start-5">
        Create New Product
      </Typography.Title>
    </header>
  );
}
