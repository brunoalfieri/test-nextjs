import { findChildrenByType } from '@/utils/findChildrenByType';
import { CheckCircle, Close } from '@mui/icons-material';
import { InputMask } from '@react-input/mask';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../Input';
import './InputText.scss';
import { InputTextProps } from './InputText.types';

export const InputTextRoot = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ children, name, mask, size, ...props }, ref) => {
    const formContext = useFormContext?.();
    const errors = formContext?.formState.errors ?? {};

    const isSubmitted = formContext?.formState.isSubmitted;
    const hasError = name && errors[name];

    const IconLeft = findChildrenByType({
      children,
      componentType: [Input.Text.IconLeft],
    });
    const IconRight = findChildrenByType({
      children,
      componentType: [Input.Text.IconRight],
    });

    return (
      <div className={'input_text_container'} data-size={size}>
        {IconLeft}
        {mask ? (
          <InputMask ref={ref} id={name} name={name} {...props} {...mask} />
        ) : (
          <input ref={ref} id={name} name={name} {...props} />
        )}
        {!isSubmitted && IconRight}
        {isSubmitted && hasError && (
          <Close className="text-alpha-helper-default" />
        )}
        {isSubmitted && !hasError && (
          <CheckCircle className="text-alpha-success-default" />
        )}
      </div>
    );
  }
);
InputTextRoot.displayName = 'InputTextRoot';
