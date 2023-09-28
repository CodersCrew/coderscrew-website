import React from 'react';
import { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';

import { FieldStateIndicator } from '../FieldStateIndicator';
import { Inputs } from '../FormJoin/FormJoin';

type InputProps = {
  errors: FieldErrors;
  register: UseFormRegister<Inputs>;
  content: string;
  dirty?: boolean;
};

export function FormUsername({ register, errors, content, dirty }: InputProps) {
  return (
    <div className="mb-5">
      <label htmlFor="name" className="font-normal leading-10 text-tetriary">
        {content}
      </label>
      <div className="flex flex-row items-center">
        <input
          type="name"
          className="form-input w-full rounded-2xl border-hidden bg-formField px-4	py-3 leading-10 text-tetriary md:w-4/6"
          {...register('name', {
            pattern: {
              value:
                /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'-]+ [a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð'-]+$/u,
              message: 'Pole powinno zawierać dwa wyrazy oddzielone spacją'
            },
            required: 'To pole jest wymagane'
          })}
        />
        <FieldStateIndicator
          error={errors.name as FieldError}
          dirty={dirty}
          className="ml-3"
        />
      </div>
      {errors['name'] && (
        <span className="text-formAlert">
          {errors.name.message?.toString()}
        </span>
      )}
    </div>
  );
}
