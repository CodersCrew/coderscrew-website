import React from 'react';
import { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';

import { FieldStateIndicator } from '@/components/FieldStateIndicator/FieldStateIndicator';

import { Inputs } from '../FormJoin/FormJoin';

type InputProps = {
  errors: FieldErrors;
  register: UseFormRegister<Inputs>;
  htmlFor: any;
  content: string;
  placeholder: string;
  dirty?: boolean;
};

export function FormTextarea({
  register,
  errors,
  htmlFor,
  content,
  placeholder,
  dirty
}: InputProps) {
  return (
    <div className="mb-5 flex flex-col">
      <label htmlFor={htmlFor} className="font-normal leading-10 text-tetriary">
        {content}
      </label>
      <div className="flex flex-row items-center">
        <textarea
          className="form-textarea block h-[314px] rounded-2xl border-hidden bg-formField p-4 px-4 py-3 leading-10 text-tetriary placeholder:text-tetriary md:w-4/6"
          {...register('message', { required: 'To pole jest wymagane' })}
          placeholder={placeholder}
        />
        <FieldStateIndicator
          error={errors.message as FieldError}
          dirty={dirty}
          className="ml-2"
        />
      </div>
      {errors.message && (
        <span className="text-formAlert">
          {errors[htmlFor]?.message?.toString()}
        </span>
      )}
    </div>
  );
}
