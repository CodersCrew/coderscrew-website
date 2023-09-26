import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { Inputs } from '../FormJoin/FormJoin';

type InputProps = {
  errors: FieldErrors;
  register: UseFormRegister<Inputs>;
  content: string;
};

export function FormUsername({ register, errors, content }: InputProps) {
  return (
    <>
      <label
        htmlFor="name"
        className="flex w-full font-normal leading-10 text-tetriary"
      >
        {content}
      </label>
      <input
        type="name"
        className="form-input mb-5 rounded-2xl border-hidden bg-formField px-4	py-3 leading-10 text-tetriary md:w-4/6 "
        {...register('name', {
          pattern: {
            value:
              /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
            message: 'Tylko litery'
          },
          required: 'To pole jest wymagane'
        })}
      />
      {errors['name'] && (
        <span className="mb-5 text-formAlert">
          {errors.name.message?.toString()}
        </span>
      )}
    </>
  );
}
