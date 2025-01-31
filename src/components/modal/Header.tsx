import { twMerge } from 'tailwind-merge';
import { Typography } from '../typography/Typography';
import {
  TYPOGRAPHY_VARIANTS,
  TypographyProps,
} from '../typography/Typography.types';

type ModalHeaderProps = Omit<
  TypographyProps<'header', TYPOGRAPHY_VARIANTS.TITLE>,
  'as' | 'variant'
> & {
  children: React.ReactNode;
};

export function ModalHeader(props: ModalHeaderProps) {
  return (
    <Typography.Title
      as="header"
      weight="medium"
      className={twMerge('text-left', props.className)}
      {...props}
    >
      {props.children}
    </Typography.Title>
  );
}
