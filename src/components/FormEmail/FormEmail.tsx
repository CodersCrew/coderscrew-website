import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import RedCross from '@/assets/red-cross-form-error.svg';

import { Inputs } from '../FormJoin/FormJoin';

type InputProps = {
  errors: FieldErrors;
  register: UseFormRegister<Inputs>;
  content: string;
};

export function FormEmail({ register, errors, content }: InputProps) {
  return (
    <div className="mb-5">
      <label
        htmlFor="email"
        className="flex font-normal leading-10 text-tetriary"
      >
        {content}
      </label>
      <div className="flex flex-row items-center">
        <input
          type="email"
          className="form-input mr-1 w-full rounded-2xl border-hidden bg-formField	px-4 py-3 leading-10 text-tetriary md:w-4/6"
          {...register('email', {
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: 'Błędny format e-mail (brak znaków specjalnych np. @,.)'
            },
            required: 'To pole jest wymagane'
          })}
        />
        {errors.email && <RedCross />}
      </div>
      {errors.email && (
        <span className="text-formAlert">
          {errors.email.message?.toString()}
        </span>
      )}
    </div>
  );
}
