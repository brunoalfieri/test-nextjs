'use client';
import { Typography } from '@/components/typography/Typography';
import {
  TYPOGRAPHY_VARIANTS,
  TypographyProps,
} from '@/components/typography/Typography.types';
import { useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface InputAddonsHelperProps
  extends Omit<
    TypographyProps<'small', TYPOGRAPHY_VARIANTS.LABEL>,
    'as' | 'variant'
  > {
  hasError?: boolean;
  inputName?: string;
}

export function InputAddonsHelper({
  inputName,
  hasError,
  className,
  ...props
}: InputAddonsHelperProps) {
  const formContext = useFormContext?.();
  const errors = formContext?.formState.errors ?? {};
  const error = inputName ? errors[inputName] : undefined;
  return (
    <Typography.Label
      {...props}
      as="small"
      size="sm"
      data-layout="helper"
      className={twMerge(hasError && 'text-[#d32f2f]', 'text-right', className)}
    >
      {hasError ? error?.message?.toString() ?? props.children : props.children}
    </Typography.Label>
  );
}
