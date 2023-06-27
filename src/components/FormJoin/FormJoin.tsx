// import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  department: string;
  message: string;
};

export function FormJoin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  console.log(watch('name'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <div className="mb-6 flex flex-col">
          <label htmlFor="name" className="font-normal text-tetriary">
            Imię i nazwisko
          </label>
          <input
            type="text"
            className="form-input mb-3 w-2/5 rounded-lg border-hidden bg-grey	px-4 py-3 leading-10 text-tetriary placeholder:text-tetriary"
            placeholder="Katarzyna Wolska"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <span className="text-marketing">To pole jest wymagane</span>
          )}
        </div>
        <div className="mb-6 flex flex-col">
          <label htmlFor="email" className="font-normal text-tetriary">
            E-mail
          </label>
          <input
            type="email"
            className="form-input mb-3 w-2/5 rounded-lg border-hidden bg-grey	px-4 py-3 leading-10 text-tetriary placeholder:text-tetriary"
            placeholder="kasia.wolska22@gmail.com"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-marketing">
              Błędny format e-mail (brak znaków specjalnych np. @, .)
            </span>
          )}
        </div>
        <div className="mb-6 flex flex-col">
          <label
            htmlFor="selectedDepartment"
            className="font-normal text-tetriary"
          >
            Dział, który Cię interesuje
          </label>
          <select
            placeholder="UX/UI Design"
            className="form-input mb-3 w-2/5 rounded-lg border-hidden bg-grey	px-4 py-3 leading-10 text-tetriary placeholder:text-tetriary"
            name="selectedDepartment"
          >
            <option value="webDevelopment">Web development</option>
            <option value="projectManagement">Project management</option>
            <option value="onlineMarketing">Online marketing</option>
            <option value="uxUiDesign">UX/UI design</option>
            <option value="HumanResources">Human Resources</option>
          </select>
        </div>
      </div>
      <div className="mb-5 flex flex-col">
        <label htmlFor="message" className="font-normal text-tetriary">
          Wiadomość:
        </label>
        <textarea
          className="form-input mb-3 block w-2/5 rounded-lg border-hidden	bg-grey p-4 px-4 py-3 leading-10 text-tetriary placeholder:text-tetriary"
          {...register('message', { required: true })}
          placeholder="Parę słów o Tobie i Twoim doświadczeniu"
        />
        {errors.message && (
          <span className="text-marketing">To pole jest wymagane</span>
        )}
      </div>
      <div className="flex flex-row">
        <input
          type="checkbox"
          className="form-checkbox mr-10 rounded text-primary"
        />
        <span className="mb-10 text-sm">
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
        </span>
      </div>
      <div className="flex flex-row">
        <input
          type="checkbox"
          className="form-checkbox mr-10 rounded text-primary"
        />
        <span className="mb-5 text-sm">
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
        </span>
      </div>
      <input
        type="submit"
        className="gap-2.5 value:text-tetriary value:text-white align-center inline-flex h-11 w-[175px] items-center rounded border border-quaternary bg-quaternary px-4 py-[12.50px]"
        value="Wyślij wiadomość"
      />
    </form>
  );
}
