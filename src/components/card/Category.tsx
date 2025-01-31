import { twMerge } from 'tailwind-merge';
import { Typography } from '../typography/Typography';
import {
  TYPOGRAPHY_VARIANTS,
  TypographyProps,
} from '../typography/Typography.types';

type CardCategoryProps = Omit<
  TypographyProps<'h2', TYPOGRAPHY_VARIANTS.LABEL>,
  'as' | 'variant'
>;
export function CardCategory(props: CardCategoryProps) {
  return (
    <Typography.Label
      {...props}
      as="small"
      size="sm"
      weight="semibold"
      className={twMerge(
        'absolute bottom-4 right-4 bg-yellow-100 px-3 py-1 rounded-md uppercase text-yellow-700',
        props.className
      )}
    >
      {props.children}
    </Typography.Label>
  );
}
