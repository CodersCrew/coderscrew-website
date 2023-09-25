import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { Inputs } from '../FormJoin/FormJoin';

type InputProps = {
  errors: FieldErrors;
  register: UseFormRegister<Inputs>;
  type: string;
  content: string;
};

export function FormEmail({ register, errors, type, content }: InputProps) {
  return (
    <>
      <label
        htmlFor="email"
        className="flex w-full font-normal leading-10 text-tetriary"
      >
        {content}
      </label>
      <input
        type={type}
        className="form-input mb-5 rounded-2xl border-hidden bg-formField px-4	py-3 leading-10 text-tetriary md:w-4/6 "
        {...register('email', { required: true })}
      />
      {errors['email'] && (
        <span className="mb-5 text-formAlert">To pole jest wymagane</span>
      )}
    </>
  );
}
