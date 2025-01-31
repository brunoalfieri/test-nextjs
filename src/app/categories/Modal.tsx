'use client';
import { Modal } from '@/components/modal';
import { useModal } from '@/providers/ModalProvider';
import { Prisma } from '@prisma/client';

export function CategoriyModal() {
  const { fnConfirm, customProps } =
    useModal<
      Prisma.ProductsCategoryGetPayload<{ include: { _count: true } }>
    >();

  return (
    <Modal.Root>
      <Modal.Header>Are you sure?</Modal.Header>
      <Modal.Content className="text-red-500">
        By confirming the deletion of the category, all{' '}
        <strong>{customProps?._count?.products}</strong> products within it will
        be permanently removed.
      </Modal.Content>
      <Modal.Footer fnConfirm={fnConfirm} />
    </Modal.Root>
  );
}
