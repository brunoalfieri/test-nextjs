import { SvgIconComponent } from '@mui/icons-material';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type InputAddonsIconRightProps =
  | (SvgIconProps & {
      icon: SvgIconComponent;
      type?: 'svg';
      buttonProps?: never;
    })
  | (SvgIconProps & {
      icon: SvgIconComponent;
      type: 'button';
      buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
    });

export function InputAddonsIconRight({
  buttonProps,
  type = 'svg',
  ...props
}: InputAddonsIconRightProps) {
  if (type === 'button') {
    return (
      <button
        {...buttonProps}
        className={twMerge(
          'hover:scale-125 transition-all',
          buttonProps?.className
        )}
      >
        <InputAddonsIconRight {...props} type="svg" />
      </button>
    );
  }
  return <SvgIcon data-direction="right" component={props.icon} {...props} />;
}
