import React from 'react';
import { type FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';

import GreenCheck from '@/assets/form-green-check.svg';
import RedCross from '@/assets/form-red-cross-error.svg';

import { Inputs } from '../FormJoin/FormJoin';

type InputProps = {
  errors: FieldErrors;
  register: UseFormRegister<Inputs>;
  content: string;
  touched?: boolean;
};

const emailFormat = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

export function FormEmail({ register, errors, content, touched }: InputProps) {
  return (
    <div className="mb-5">
      <label
        htmlFor="email"
        className="flex font-normal leading-10 text-tetriary"
      >
        {content}
      </label>
      <div className="m-auto flex flex-row items-center">
        <input
          type="email"
          className="form-input w-full rounded-2xl border-hidden bg-formField px-4 py-3 leading-10 text-tetriary md:w-4/6"
          {...register('email', {
            pattern: {
              value: emailFormat,
              message: 'Błędny format e-mail (brak znaków specjalnych np. @,.)'
            },
            required: 'To pole jest wymagane'
          })}
        />
        <FieldStateIndicator
          error={errors.email as FieldError}
          touched={touched}
          className="ml-2"
        />
      </div>
      {errors.email && (
        <span className="text-formAlert">
          {errors.email.message?.toString()}
        </span>
      )}
    </div>
  );
}

function FieldStateIndicator({
  error,
  touched,
  className
}: {
  error: FieldError;
  touched?: boolean;
  className?: string;
}) {
  console.log({ error, touched });
  if (touched === undefined) return null;
  return !error ? (
    <GreenCheck className={className} />
  ) : (
    <RedCross className={className} />
  );
}
