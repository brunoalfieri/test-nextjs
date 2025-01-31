import { twMerge } from 'tailwind-merge';
import { Typography } from '../typography/Typography';
import {
  TYPOGRAPHY_VARIANTS,
  TypographyProps,
} from '../typography/Typography.types';

type ModalContentProps = Omit<
  TypographyProps<'p', TYPOGRAPHY_VARIANTS.TITLE>,
  'as' | 'variant'
> & {
  children: React.ReactNode;
};

export function ModalContent(props: ModalContentProps) {
  return (
    <div className="mt-2">
      <Typography.Body
        as="p"
        className={twMerge('text-left', props.className)}
        {...props}
      >
        {props.children}
      </Typography.Body>
    </div>
  );
}
