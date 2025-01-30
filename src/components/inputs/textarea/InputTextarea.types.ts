import { SIZE } from '@/types/global';
import * as React from 'react';

export interface InputTextareaProps
  extends Omit<React.HTMLProps<HTMLTextAreaElement>, 'size'> {
  resize?: 'axisX' | 'axisY' | 'both';
  size: `${SIZE}`;
}
