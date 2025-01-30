import { Typography } from '@/components/typography/Typography';
import {
  TYPOGRAPHY_VARIANTS,
  TypographyProps,
} from '@/components/typography/Typography.types';
import { useFormContext } from 'react-hook-form';

interface InputAddonsMaxCharsProps
  extends TypographyProps<'small', TYPOGRAPHY_VARIANTS.BODY> {
  maxChars: number;
  currentValue?: string;
  name?: string;
}

export function InputAddonsMaxChars({
  maxChars,
  currentValue,
  ...props
}: InputAddonsMaxCharsProps) {
  const formContext = useFormContext();
  const value: string | undefined = props.name
    ? formContext?.watch(props.name)
    : undefined;
  const chars = currentValue?.length ?? value?.length ?? 0;
  return (
    <Typography.Body data-layout="max-chars" {...props} as="small">
      {`${chars}/${maxChars}`}
    </Typography.Body>
  );
}
