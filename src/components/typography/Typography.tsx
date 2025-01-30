import { SIZE, WEIGHTS } from '@/types/global';
import React, { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import TypographyStyle from './Typography.module.scss';
import { TYPOGRAPHY_VARIANTS, TypographyProps } from './Typography.types';

function TypographyDefault<
  E extends keyof React.JSX.IntrinsicElements,
  V extends TYPOGRAPHY_VARIANTS
>({
  as,
  variant,
  size,
  weight = WEIGHTS.REGULAR,
  color,
  children,
  ...props
}: TypographyProps<E, V>) {
  const Component = as as ElementType;

  return (
    <Component
      {...props}
      data-color={color}
      data-weight={weight}
      data-size={size}
      data-variant={variant}
      className={twMerge(TypographyStyle['typography'], props.className)}
    >
      {children}
    </Component>
  );
}

export const Typography = {
  Title: <E extends keyof React.JSX.IntrinsicElements>(
    props: Omit<TypographyProps<E, TYPOGRAPHY_VARIANTS.TITLE>, 'variant'>
  ) =>
    // @ts-expect-error: "as" is required and exists
    TypographyDefault({
      size: SIZE.MD,
      ...props,
      variant: TYPOGRAPHY_VARIANTS.TITLE,
    }),
  Body: <E extends keyof React.JSX.IntrinsicElements>(
    props: Omit<TypographyProps<E, TYPOGRAPHY_VARIANTS.BODY>, 'variant'>
  ) =>
    // @ts-expect-error: "as" is required and exists
    TypographyDefault({
      size: SIZE.MD,
      ...props,
      variant: TYPOGRAPHY_VARIANTS.BODY,
    }),
  Label: <E extends keyof React.JSX.IntrinsicElements>(
    props: Omit<TypographyProps<E, TYPOGRAPHY_VARIANTS.LABEL>, 'variant'>
  ) =>
    // @ts-expect-error: "as" is required and exists
    TypographyDefault({
      size: SIZE.MD,
      ...props,
      variant: TYPOGRAPHY_VARIANTS.LABEL,
    }),
};
