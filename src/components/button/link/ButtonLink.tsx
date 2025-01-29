import { SIZE, VARIANT } from '@/types/global';
import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import ButtonLinkStyle from './ButtonLink.module.scss';
import { ButtonLinkProps } from './ButtonLink.types';

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ size = SIZE.MD, variant = VARIANT.TEXT, ...props }, ref) => {
    return (
      <Link
        {...props}
        ref={ref}
        data-size={size}
        data-variant={variant}
        className={twMerge(
          'flex justify-center items-center rounded-[4px] transition-all disabled:cursor-not-allowed w-full gap-2',
          ButtonLinkStyle['button_link'],
          props.className
        )}
      >
        {props.children}
      </Link>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';
