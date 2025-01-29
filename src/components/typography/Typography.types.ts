import { SIZE, WEIGHTS } from '@/types/global';
import React from 'react';

export enum TYPOGRAPHY_VARIANTS {
  'HEADLINE' = 'headline',
  'TITLE' = 'title',
  'BODY' = 'body',
  'LABEL' = 'label',
}

export type TypographyDefaultOwnProps<
  E extends keyof React.JSX.IntrinsicElements,
  V extends TYPOGRAPHY_VARIANTS
> = {
  as: E;
  variant: V;
  size?: `${SIZE}`;
  weight?: `${WEIGHTS}`;
  isIcon?: boolean;
};

export type TypographyProps<
  E extends keyof React.JSX.IntrinsicElements,
  V extends TYPOGRAPHY_VARIANTS
> = TypographyDefaultOwnProps<E, V> & React.JSX.IntrinsicElements[E];
