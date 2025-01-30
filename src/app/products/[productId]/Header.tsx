import { Button } from '@/components/button/default/ButtonDefault';
import { ButtonLink } from '@/components/button/link/ButtonLink';
import { Typography } from '@/components/typography/Typography';
import { ArrowBackIosNew, DeleteOutline } from '@mui/icons-material';

export function Header(props: { productId: string }) {
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
        Update Product #{props.productId.padStart(3, '0')}
      </Typography.Title>
      <Button
        variant="solid"
        size="icon"
        className="col-span-1 hover:scale-110 col-end-13 !bg-red-500 !rounded-full transition-all group"
      >
        <DeleteOutline className="group-hover:scale-125 transition-all" />
      </Button>
    </header>
  );
}
