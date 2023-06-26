import { SubmitHandler,useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  department: string;
  message: string;
};

export function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  console.log(watch('name'));

  return (
    <>
      <h2>Cześć!</h2>
      <h2>Cieszymy się, że chcesz zostać członkiem CodersCrew!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name', { required: true })} />
        {errors.name && <span>To pole jest wymagane</span>}
        <input {...register('email', { required: true })} />
        {errors.email && (
          <span>Błędny format e-mail (brak znaków specjalnych np. @, .)</span>
        )}
        <select name="selectedDepartment">
          <option value="webDevelopment">Web development</option>
          <option value="projectManagement">Project management</option>
          <option value="onlineMarketing">Online marketing</option>
          <option value="uxUiDesign">UX/UI design</option>
          <option value="HumanResources">Human Resources</option>
        </select>
        <input {...register('message', { required: true })} />
        {errors.message && <span>To pole jest wymagane</span>}
        <input type="submit" />

        <button>Wyślij wiadomość</button>
      </form>
    </>
  );
}
