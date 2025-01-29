import { SIZE, VARIANT } from '@/types/global';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonDefaultProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'className'
  > {
  href?: string;
  size?: `${SIZE}` | 'icon';
  variant?: `${VARIANT}`;
  className?: string | string[];
}
