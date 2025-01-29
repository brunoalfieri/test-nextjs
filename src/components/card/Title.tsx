import { twMerge } from 'tailwind-merge';
import { Typography } from '../typography/Typography';
import {
  TYPOGRAPHY_VARIANTS,
  TypographyProps,
} from '../typography/Typography.types';

interface CardTitleProps
  extends Omit<
    TypographyProps<'h2', TYPOGRAPHY_VARIANTS.TITLE>,
    'as' | 'variant'
  > {}
export function CardTitle(props: CardTitleProps) {
  return (
    <Typography.Title
      {...props}
      as="h2"
      size="sm"
      className={twMerge('', props.className)}
    >
      {props.children}
    </Typography.Title>
  );
}
