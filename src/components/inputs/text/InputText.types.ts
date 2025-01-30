import { SIZE } from '@/types/global';
import { InputMaskProps, MaskProps } from '@react-input/mask';
import * as React from 'react';

export type DefaultProps = Omit<InputMaskProps, 'mask' | 'size'> & {
  name?: string;
  children?: React.ReactNode;
  size: `${SIZE}`;
};
export type InputTextProps =
  | (DefaultProps & {
      mask?: undefined;
    })
  | (DefaultProps & {
      mask: MaskProps;
    });
