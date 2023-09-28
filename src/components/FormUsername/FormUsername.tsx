import React from 'react';
import { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { FieldStateIndicator } from '../FieldStateIndicator';
import { Inputs } from '../FormJoin/FormJoin';

type InputProps = {
  errors: FieldErrors;
  register: UseFormRegister<Inputs>;
  content: string;
  touched?: boolean;
};

const watch = useForm<Inputs>;

export function FormUsername({
  register,
  errors,
  content,
  touched
}: InputProps) {
  const watchUsername = watch();
  return (
    <div className="mb-5">
      <label htmlFor="name" className="font-normal leading-10 text-tetriary">
        {content}
      </label>
      <div className="flex flex-row items-center">
        <input
          type="name"
          className="form-input mr-1 w-full rounded-2xl border-hidden bg-formField px-4	py-3 leading-10 text-tetriary md:w-4/6"
          {...register('name', {
            pattern: {
              value:
                /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
              message: 'Tylko litery'
            },
            required: 'To pole jest wymagane'
          })}
        />
        <FieldStateIndicator
          error={errors.name as FieldError}
          touched={touched}
          className="ml-2"
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
