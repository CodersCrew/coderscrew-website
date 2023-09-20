import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Koperta from '@/assets/koperta.svg';
import Pinezka from '@/assets/Pinezka.svg';

type Inputs = {
  name: string;
  email: string;
  department: string;
  message: string;
  privacyPolicy: boolean;
  rodo: boolean;
};

export function FormJoin() {
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [rodo, setRodo] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    data.privacyPolicy = privacyPolicy;
    data.rodo = rodo;
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <main className="flex w-full flex-col md:flex-row">
        <section className="flex w-full flex-col">
          <div className="">
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="name"
                className="font-normal leading-10 text-tetriary"
              >
                Imię i nazwisko
              </label>
              <input
                type="text"
                className="form-input mb-3 rounded-2xl border-hidden bg-formField px-4	py-3 leading-10 text-tetriary md:w-4/6 "
                {...register('name', { required: true })}
              />
              {errors.name && (
                <span className="text-formAlert">To pole jest wymagane</span>
              )}
            </div>
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="email"
                className="font-normal leading-10 text-tetriary"
              >
                E-mail
              </label>
              <input
                type="email"
                className="form-input mb-3 rounded-2xl border-hidden bg-formField px-4	py-3 leading-10 text-tetriary md:w-4/6 "
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-formAlert">
                  Błędny format e-mail (brak znaków specjalnych np. @, .)
                </span>
              )}
            </div>
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="department"
                className="font-normal leading-10 text-tetriary"
              >
                Dział, który Cię interesuje
              </label>
              <select
                placeholder="Wybierz z listy"
                className="form-input mb-3 rounded-2xl border-hidden bg-formField px-4	py-3 leading-10 text-tetriary placeholder:text-tetriary md:w-4/6"
                {...register('department')}
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
            <label
              htmlFor="message"
              className="font-normal leading-10 text-tetriary"
            >
              Wiadomość:
            </label>
            <textarea
              className="form-textarea mb-3 block h-[314px] rounded-2xl border-hidden bg-formField p-4 px-4 py-3 leading-10 text-tetriary placeholder:text-tetriary md:w-4/6"
              {...register('message', { required: true })}
              placeholder="Parę słów o Tobie i Twoim doświadczeniu"
            />
            {errors.message && (
              <span className="text-formAlert">To pole jest wymagane</span>
            )}
          </div>
          <div className="flex flex-row">
            <input
              type="checkbox"
              className="form-checkbox mr-5 h-6 w-6 rounded-md text-primary"
              onChange={e => setPrivacyPolicy(e.target.checked)}
            />
            <span className="mb-10 text-sm">
              Akceptuję Politykę Prywatności serwisu coderscrew.pl i wyrażam
              zgodę na przetwarzanie przez Stowarzyszenie CodersCrew z siedzibą
              we Wrocławiu, wpisane do rejestru stowarzyszeń Krajowego Rejestru
              Sądowego pod numerem KRS 0000744745 (dalej: “Stowarzyszenie”), w
              celach marketingowych, w tym do przesyłania mi informacji o
              wydarzeniach organizowanych przez Stowarzyszenie, a także w celu
              ich wykorzystania w materiałach audio, audiowizualnych,
              fotograficznych lub na jakichkolwiek innych nośnikach, a także w
              mediach społecznościowych, portalach i na stronach internetowych
              Stowarzyszenia do celów marketingowych (promocyjnych)
              Stowarzyszenia.
            </span>
          </div>
          <div className="flex flex-row">
            <input
              type="checkbox"
              className="form-checkbox mr-5 h-6 w-6 rounded-md text-primary"
              onChange={e => setRodo(e.target.checked)}
            />
            <span className="mb-5 text-sm">
              Oświadczam, że zapoznałam/em się z “Informacją o przetwarzaniu
              danych osobowych” zawartej w Polityce Prywatności, zawierającą m.
              in. informacje o szczegółowych celach przetwarzania moich danych
              osobowych, o podstawie prawnej ich przetwarzania, o danych
              kontaktowych Administratora, a także o wszelkich przysługujących
              mi uprawnieniach i warunkach ich realizacji, w tym o prawie:
              dostępu do moich danych osobowych, żądania ich usunięcia,
              uzupełnienia, sprostowania, przeniesienia lub ograniczenia ich
              przetwarzania, wniesienia sprzeciwu i złożenia skargi do Prezesa
              Urzędu Ochrony Danych Osobowych. Zostałam/em poinformowana/y, że w
              każdej chwili przysługuje mi prawo do cofnięcia zgody na
              przetwarzanie danych osobowych, a wycofanie zgody nie wpływa na
              zgodność z prawem przetwarzania, którego dokonano na podstawie
              zgody przed jej wycofaniem.
            </span>
          </div>
          <div className="flex items-start justify-center pt-10 leading-tight">
            <input
              type="submit"
              className="inline-flex  h-11 w-[175px] items-start justify-center rounded border border-quaternary bg-quaternary bg-center px-4 py-[12.50px] leading-tight text-white"
              value="Wyślij wiadomość"
            />
          </div>
        </section>

        <aside className="flex w-1/2 flex-col">
          <section className="flex flex-col pb-10">
            <h2 className="pl-10 text-2xl font-bold md:text-3.5xl">
              Masz pytania?
            </h2>
            <h2 className="pb-10 pl-10 text-2xl font-bold md:w-4/5 md:text-3.5xl">
              Skontaktuj się z nami!
            </h2>
            <div className="flex flex-row items-center pb-5 font-normal md:pl-10">
              <Koperta />
              <p className="font-normal leading-normal md:pl-4">
                kontakt @ coderscrew.pl
              </p>
            </div>
            <div className="flex flex-row items-center pb-5 font-normal md:pl-10">
              <Pinezka />
              <p className="w-full font-normal leading-normal md:w-2/3 md:pl-4">
                ul. Powstańców Śląskich 5, pokój 610, Wrocław
              </p>
            </div>
          </section>
        </aside>
      </main>
    </form>
  );
}
