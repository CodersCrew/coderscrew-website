import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { Inputs } from '../FormJoin/FormJoin';

type InputProps = {
  errors: FieldErrors;
  register: UseFormRegister<Inputs>;
  htmlFor: any;
  content: string;
};

export function FormSelect({ register, errors, htmlFor, content }: InputProps) {
  return (
    <>
      <label htmlFor={htmlFor} className="font-normal leading-10 text-tetriary">
        {content}
      </label>
      <select
        className="form-input mb-5 rounded-2xl border-hidden bg-formField px-4 py-3 leading-10 text-tetriary placeholder:text-tetriary md:w-4/6"
        {...register(htmlFor)}
      >
        <option value="webDevelopment">Web development</option>
        <option value="projectManagement">Project management</option>
        <option value="onlineMarketing">Online marketing</option>
        <option value="uxUiDesign">UX/UI design</option>
        <option value="HumanResources">Human Resources</option>
      </select>
    </>
  );
}
