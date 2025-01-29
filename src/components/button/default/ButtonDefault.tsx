import { SIZE, VARIANT } from '@/types/global';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import ButtonStyle from './ButtonDefault.module.scss';
import { ButtonDefaultProps } from './ButtonDefault.types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonDefaultProps>(
  ({ size = SIZE.MD, variant = VARIANT.SOLID, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        data-size={size}
        data-variant={variant}
        className={twMerge(
          'flex justify-center items-center transition-all disabled:cursor-not-allowed w-full',
          ButtonStyle['button_default'],
          props.className
        )}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = 'ButtonDefault';
