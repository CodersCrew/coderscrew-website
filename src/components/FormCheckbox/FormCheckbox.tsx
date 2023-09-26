import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { Inputs } from '../FormJoin/FormJoin';

type InputProps = {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors;
  htmlFor: any;
  content: string;
};

export function FormCheckbox({
  register,
  errors,
  htmlFor,
  content
}: InputProps) {
  return (
    <div className="flex flex-row">
      <input
        type="checkbox"
        className={`+ form-checkbox mr-5 h-6 w-6 rounded-md text-primary hover:cursor-pointer focus:invisible ${
          errors[htmlFor] && 'border-x-marketing border-y-marketing'
        }`}
        {...register(htmlFor, { required: true })}
      />
      <span className="mb-10 text-sm">{content}</span>
    </div>
  );
}
