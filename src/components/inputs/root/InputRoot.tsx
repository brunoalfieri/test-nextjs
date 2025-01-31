'use client';
import { SIZE } from '@/types/global';
import { findChildrenByType } from '@/utils/findChildrenByType';
import _ from 'lodash';
import { useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { Input } from '../Input';
import { InputTextRoot } from '../text/InputText';
import './InputRoot.scss';
import { InputRootProps } from './InputRoot.types';

export function InputRoot({
  children,
  className,
  size = SIZE.LG,
  ...props
}: InputRootProps) {
  const formContext = useFormContext?.();
  const errors = formContext?.formState.errors ?? {};
  const isSubmitted = formContext?.formState.isSubmitted;
  const CompInput = findChildrenByType({
    children,
    componentType: [InputTextRoot, Input.Textarea],
    props: {
      formNoValidate: props.formNoValidate,
    },
  });

  if (_.isNil(CompInput)) {
    throw new Error('Should pass Input children inside Input.Root');
  }

  const error = CompInput.props.name ? errors[CompInput.props.name] : undefined;
  const hasError = Boolean(error);
  const AddonHelper = findChildrenByType({
    children,
    componentType: [Input.Addons.Helper],
    props: {
      inputName: CompInput.props.name,
      hasError,
    },
  });

  // @ts-expected-error: Deep union type
  const AddonMaxChar = findChildrenByType({
    children,
    componentType: [Input.Addons.MaxChars],
    props: {
      name: CompInput.props.name,
    },
  });
  return (
    <div
      data-error={isSubmitted && hasError}
      data-success={isSubmitted && !hasError}
      data-size={size}
      className={twMerge('input_root', className)}
      {...props}
    >
      {CompInput}
      {(AddonMaxChar || AddonHelper) && (
        <div className={'root_bottom_helpers gap-2'}>
          {AddonHelper}
          {AddonMaxChar}
        </div>
      )}
    </div>
  );
}
