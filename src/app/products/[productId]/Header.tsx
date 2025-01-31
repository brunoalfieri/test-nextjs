'use client';
import { Button } from '@/components/button/default/ButtonDefault';
import { ButtonLink } from '@/components/button/link/ButtonLink';
import { Modal } from '@/components/modal';
import { Typography } from '@/components/typography/Typography';
import { useModal } from '@/providers/ModalProvider';
import { EProductAction, productsService } from '@/service/actions/products';
import { ProductReadSchema } from '@/service/actions/products/schema';
import { ArrowBackIosNew, DeleteOutline } from '@mui/icons-material';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export function Header(props: { product: ProductReadSchema }) {
  const route = useRouter();
  const { openModal } = useModal();

  const productDelete = useMutation({
    mutationKey: [EProductAction.PRODUCT_DELETE],
    mutationFn: productsService.delete,
    onSuccess() {
      toast('Delete successfully!', { type: 'error' });

      route.replace('/products');
    },
  });

  return (
    <header className="col-span-12 text-center grid-cols-12 grid place-items-center">
      <ButtonLink
        href="/products"
        variant="text"
        size="icon"
        className="col-span-1 hover:scale-110 !rounded-full transition-all group"
      >
        <ArrowBackIosNew className="group-hover:scale-125 transition-all" />
      </ButtonLink>
      <Typography.Title as="h1" className="col-span-4 col-start-5">
        Update Product #{props.product.id?.toString().padStart(3, '0')}
      </Typography.Title>
      <Button
        variant="solid"
        size={productDelete.isPending ? 'md' : 'icon'}
        loading={productDelete.isPending && 'Processing'}
        onClick={() => openModal()}
        className="col-span-1 enabled:hover:scale-110 col-end-13 enabled:!bg-red-500 enabled:!rounded-full transition-all group"
      >
        <DeleteOutline className="group-hover:scale-125 transition-all" />
      </Button>
      <Modal.Root>
        <Modal.Header>Are you sure?</Modal.Header>
        <Modal.Content className="text-red-500">
          Deleting the <strong>{props.product.name}</strong> item will be
          irreversible, and the data will be permanently removed
        </Modal.Content>
        <Modal.Footer
          fnConfirm={() => {
            productDelete.mutateAsync({ id: props.product.id });
          }}
        />
      </Modal.Root>
    </header>
  );
}
