import { twMerge } from 'tailwind-merge';
import { Typography } from '../typography/Typography';
import {
  TYPOGRAPHY_VARIANTS,
  TypographyProps,
} from '../typography/Typography.types';

type CardTitleProps = Omit<
  TypographyProps<'h2', TYPOGRAPHY_VARIANTS.TITLE>,
  'as' | 'variant'
>;
export function CardTitle(props: CardTitleProps) {
  return (
    <Typography.Title
      {...props}
      as="h2"
      size="sm"
      className={twMerge('line-clamp-2', props.className)}
    >
      {props.children}
    </Typography.Title>
  );
}
