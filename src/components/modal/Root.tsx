import { useModal } from '@/providers/ModalProvider';
import { findChildrenByType } from '@/utils/findChildrenByType';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { ModalContent } from './Content';
import { ModalFooter } from './Footer';
import { ModalHeader } from './Header';

interface ModalRootProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}
export function ModalRoot(props: ModalRootProps) {
  const { isOpen } = useModal();
  const CompHeader = findChildrenByType({
    componentType: [ModalHeader],
    children: props.children,
    isRequired: true,
  });
  const CompContent = findChildrenByType({
    componentType: [ModalContent],
    children: props.children,
    isRequired: true,
  });
  const CompFooter = findChildrenByType({
    componentType: [ModalFooter],
    children: props.children,
    isRequired: true,
  });
  if (!isOpen) return null;

  return (
    <div
      {...props}
      className={twMerge(
        'fixed top-0 left-0 bg-zinc-800 bg-opacity-50 w-full h-full z-10 grid place-items-center grid-cols-12',
        props.className
      )}
    >
      <section className="col-span-4 col-start-5 bg-white w-full p-4 rounded-lg">
        {CompHeader}
        {CompContent}
        {CompFooter}
      </section>
    </div>
  );
}
