import { SIZE } from '@/types/global';
import { SvgIconComponent } from '@mui/icons-material';
import { HTMLProps } from 'react';

export interface InputAddonsElementProps
  extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  size?: `${SIZE.LG}` | `${SIZE.SM}`;
  beforeIcon?: React.ReactElement<SvgIconComponent>;
  afterIcon?: React.ReactElement<SvgIconComponent>;
  children?: React.ReactNode;
}

export interface InputAddonHelperProps {
  children: React.ReactNode;
}

export interface InputAddonErrorProps {
  children?: React.ReactNode;
}

export interface InputAddonAmmountProps {
  length: number;
  maxLength: number;
}
