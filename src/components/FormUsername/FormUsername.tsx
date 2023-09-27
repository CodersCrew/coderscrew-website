import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { Inputs } from '../FormJoin/FormJoin';

type InputProps = {
  errors: FieldErrors;
  register: UseFormRegister<Inputs>;
  content: string;
};

const watch = useForm<Inputs>;

export function FormUsername({ register, errors, content }: InputProps) {
  const watchUsername = watch();
  return (
    <div className="mb-5">
      <label htmlFor="name" className="font-normal leading-10 text-tetriary">
        {content}
      </label>
      <div className="flex flex-row items-center">
        <input
          type="name"
          className="form-input mr-1 w-full rounded-2xl border-hidden bg-formField px-4	py-3 leading-10 text-tetriary md:w-4/6 "
          {...register('name', {
            pattern: {
              value:
                /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
              message: 'Tylko litery'
            },
            required: 'To pole jest wymagane'
          })}
        />
      </div>
      {errors['name'] && (
        <span className="mb-5 text-formAlert">
          {errors.name.message?.toString()}
        </span>
      )}
    </div>
  );
}
