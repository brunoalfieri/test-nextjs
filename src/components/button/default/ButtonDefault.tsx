import { SIZE, VARIANT } from '@/types/global';
import { RefreshOutlined } from '@mui/icons-material';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import ButtonStyle from './ButtonDefault.module.scss';
import { ButtonDefaultProps } from './ButtonDefault.types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonDefaultProps>(
  ({ size = SIZE.MD, variant = VARIANT.SOLID, loading, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        disabled={!!loading || props.disabled}
        data-size={size}
        data-variant={variant}
        className={twMerge(
          'flex justify-center items-center transition-all disabled:cursor-not-allowed w-full',
          ButtonStyle['button_default'],
          props.className
        )}
      >
        {loading ? (
          <>
            {typeof loading === 'string' && loading}
            <RefreshOutlined className="animate-spin" />
          </>
        ) : (
          props.children
        )}
      </button>
    );
  }
);

Button.displayName = 'ButtonDefault';
