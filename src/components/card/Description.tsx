import { twMerge } from 'tailwind-merge';
import { Typography } from '../typography/Typography';
import {
  TYPOGRAPHY_VARIANTS,
  TypographyProps,
} from '../typography/Typography.types';

type CardDescriptionProps = Omit<
  TypographyProps<'p', TYPOGRAPHY_VARIANTS.LABEL>,
  'as' | 'variant'
>;

export function CardDescription(props: CardDescriptionProps) {
  return (
    <Typography.Label
      {...props}
      as="p"
      size="sm"
      className={twMerge('text-opacity-90 line-clamp-2', props.className)}
    >
      {props.children}
    </Typography.Label>
  );
}
