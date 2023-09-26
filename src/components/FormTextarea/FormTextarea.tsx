import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { Inputs } from '../FormJoin/FormJoin';

type InputProps = {
  errors: FieldErrors;
  register: UseFormRegister<Inputs>;
  htmlFor: any;
  content: string;
  placeholder: string;
};

export function FormTextarea({
  register,
  errors,
  htmlFor,
  content,
  placeholder
}: InputProps) {
  return (
    <div className="mb-5 flex flex-col">
      <label htmlFor={htmlFor} className="font-normal leading-10 text-tetriary">
        {content}
      </label>
      <textarea
        className="form-textarea mb-3 block h-[314px] rounded-2xl border-hidden bg-formField p-4 px-4 py-3 leading-10 text-tetriary placeholder:text-tetriary md:w-4/6"
        {...register('message', { required: 'To pole jest wymagane' })}
        placeholder={placeholder}
      />
      {errors.message && (
        <span className="text-formAlert">
          {errors[htmlFor]?.message?.toString()}
        </span>
      )}
    </div>
  );
}
