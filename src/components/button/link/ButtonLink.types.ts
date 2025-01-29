import { SIZE, VARIANT } from '@/types/global';
import Link from 'next/link';

export interface ButtonLinkProps
  extends Omit<React.ComponentProps<typeof Link>, 'className'> {
  disabled?: boolean;
  variant?: `${VARIANT}`;
  size?: `${SIZE}` | 'icon';
  className?: string | string[];
}
