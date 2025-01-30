'use client';
import React from 'react';
import './InputTextarea.scss';
import { InputTextareaProps } from './InputTextarea.types';

export const InputTextarea = React.forwardRef<
  HTMLTextAreaElement,
  InputTextareaProps
>(({ name, resize, size, ...props }, ref) => {
  return (
    <div
      className={'input_textarea_container'}
      data-resize={resize}
      data-size={size}
    >
      <textarea ref={ref} id={name} name={name} {...props} />
    </div>
  );
});
InputTextarea.displayName = 'InputTextarea';
