import { SIZE } from '@/types/global';
import React, { HTMLProps } from 'react';

export interface InputRootProps
  extends Omit<HTMLProps<HTMLInputElement>, 'size'> {
  size?: `${SIZE}`;
  children: React.JSX.Element[] | React.JSX.Element;
}
