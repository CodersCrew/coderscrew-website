import { SubmitHandler, useForm } from 'react-hook-form';

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
        <textarea {...register('message', { required: true })} />
        {errors.message && <span>To pole jest wymagane</span>}
        <input type="checkbox" name="privatePolicy" />
        <p>
          Akceptuję Politykę Prywatności serwisu coderscrew.pl i wyrażam zgodę
          na przetwarzanie przez Stowarzyszenie CodersCrew z siedzibą we
          Wrocławiu, wpisane do rejestru stowarzyszeń Krajowego Rejestru
          Sądowego pod numerem KRS 0000744745 (dalej: “Stowarzyszenie”), w
          celach marketingowych, w tym do przesyłania mi informacji o
          wydarzeniach organizowanych przez Stowarzyszenie, a także w celu ich
          wykorzystania w materiałach audio, audiowizualnych, fotograficznych
          lub na jakichkolwiek innych nośnikach, a także w mediach
          społecznościowych, portalach i na stronach internetowych
          Stowarzyszenia do celów marketingowych (promocyjnych) Stowarzyszenia.
        </p>
        <input type="checkbox" name="dataProcessing" />
        <p>
          Oświadczam, że zapoznałam/em się z “Informacją o przetwarzaniu danych
          osobowych” zawartej w Polityce Prywatności, zawierającą m. in.
          informacje o szczegółowych celach przetwarzania moich danych
          osobowych, o podstawie prawnej ich przetwarzania, o danych
          kontaktowych Administratora, a także o wszelkich przysługujących mi
          uprawnieniach i warunkach ich realizacji, w tym o prawie: dostępu do
          moich danych osobowych, żądania ich usunięcia, uzupełnienia,
          sprostowania, przeniesienia lub ograniczenia ich przetwarzania,
          wniesienia sprzeciwu i złożenia skargi do Prezesa Urzędu Ochrony
          Danych Osobowych. Zostałam/em poinformowana/y, że w każdej chwili
          przysługuje mi prawo do cofnięcia zgody na przetwarzanie danych
          osobowych, a wycofanie zgody nie wpływa na zgodność z prawem
          przetwarzania, którego dokonano na podstawie zgody przed jej
          wycofaniem.
        </p>
        <button>Wyślij wiadomość</button>
      </form>
    </>
  );
}
