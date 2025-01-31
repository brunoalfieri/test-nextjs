import { SvgIconComponent } from '@mui/icons-material';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { ButtonHTMLAttributes } from 'react';

type InputAddonsIconLeftProps =
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

export function InputAddonsIconLeft({
  buttonProps,
  type = 'svg',
  ...props
}: InputAddonsIconLeftProps) {
  if (type === 'button') {
    return (
      <button {...buttonProps}>
        <InputAddonsIconLeft {...props} type="svg" />
      </button>
    );
  }
  return <SvgIcon data-direction="right" component={props.icon} {...props} />;
}
