'use client';
import { Typography } from '@/components/typography/Typography';
import { useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface InputAddonsHelperProps
  extends React.ComponentProps<
    typeof Typography.Body<keyof React.JSX.IntrinsicElements>
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
      as={props.as ?? 'small'}
      size="sm"
      data-layout="helper"
      className={twMerge(hasError && 'text-[#d32f2f]', 'text-right', className)}
    >
      {hasError ? error?.message?.toString() ?? props.children : props.children}
    </Typography.Label>
  );
}
