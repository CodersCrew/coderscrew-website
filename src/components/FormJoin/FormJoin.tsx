import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Koperta from '@/assets/koperta.svg';
import Pinezka from '@/assets/pinezka.svg';
import { FormCheckbox } from '@/components/FormCheckbox';
import { FormEmail } from '@/components/FormEmail';
import { FormSelect } from '@/components/FormSelect';
import { FormTextarea } from '@/components/FormTextarea';
import { FormUsername } from '@/components/FormUsername';
import contactHandler from '@/pages/api/contact';

export type Inputs = {
  name: string;
  email: string;
  department: string;
  message: string;
  privacyPolicy: boolean;
  rodo: boolean;
};

export function FormJoin() {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields }
  } = useForm<Inputs>({ mode: 'onChange' });

  const onSubmit = async (data: Inputs) => {
    const resopnse = await fetch(`${location.origin}/api/contact`, {
      body: JSON.stringify(data),
      method: 'POST'
    });
    console.log(resopnse);
  };

  return (
    <form
      className="flex w-full flex-col lg:flex-row"
      onSubmit={handleSubmit(onSubmit)}
    >
      <main className="flex w-full flex-col">
        <FormUsername
          register={register}
          errors={errors}
          content="Imię i nazwisko"
          dirty={dirtyFields.name}
        />
        <FormEmail
          register={register}
          errors={errors}
          content="E-mail"
          dirty={dirtyFields.email}
        />
        <FormSelect
          register={register}
          errors={errors}
          htmlFor="department"
          content="Dział, który Cię interesuje"
        />
        <FormTextarea
          register={register}
          errors={errors}
          htmlFor="message"
          content="Wiadomość:"
          placeholder="Parę słów o Tobie i Twoim doświadczeniu"
          dirty={dirtyFields.message}
        />
        <div className="mt-11">
          <FormCheckbox
            register={register}
            errors={errors}
            htmlFor="privacyPolicy"
            content="Akceptuję Politykę Prywatności serwisu coderscrew.pl i wyrażam zgodę
            na przetwarzanie przez Stowarzyszenie CodersCrew z siedzibą we
            Wrocławiu, wpisane do rejestru stowarzyszeń Krajowego Rejestru
            Sądowego pod numerem KRS 0000744745 (dalej: “Stowarzyszenie”), w
            celach marketingowych, w tym do przesyłania mi informacji o
            wydarzeniach organizowanych przez Stowarzyszenie, a także w celu ich
            wykorzystania w materiałach audio, audiowizualnych, fotograficznych
            lub na jakichkolwiek innych nośnikach, a także w mediach
            społecznościowych, portalach i na stronach internetowych
            Stowarzyszenia do celów marketingowych (promocyjnych)
            Stowarzyszenia."
          />
          <FormCheckbox
            register={register}
            errors={errors}
            htmlFor="rodo"
            content="Oświadczam, że zapoznałam/em się z “Informacją o przetwarzaniu
            danych osobowych” zawartej w Polityce Prywatności, zawierającą m.
            in. informacje o szczegółowych celach przetwarzania moich danych
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
            wycofaniem."
          />
        </div>
        <div className="flex items-start justify-center leading-tight">
          <input
            type="submit"
            className="flex w-[175px] items-start justify-center rounded border border-quaternary bg-quaternary px-4 py-[12.50px] leading-tight text-additional-white transition-colors duration-200 hover:cursor-pointer hover:border-webDev hover:bg-webDev hover:shadow-button"
            value="Wyślij wiadomość"
            formNoValidate
          />
        </div>
      </main>
      <aside className="flex flex-col sm:w-1/2">
        <h2 className="pt-19 text-2xl font-bold md:pl-10 md:text-3.5xl">
          Masz pytania?
        </h2>
        <h2 className="pb-5 text-2xl font-bold md:w-4/5 md:pb-10 md:pl-10 md:text-3.5xl">
          Skontaktuj się z nami!
        </h2>
        <div className="flex flex-row items-center pb-5 font-normal md:pl-10">
          <Koperta />
          <p className="pl-4 font-normal leading-normal">
            kontakt @ coderscrew.pl
          </p>
        </div>
        <div className="flex flex-row items-center pb-5 font-normal md:pl-10">
          <Pinezka />
          <p className="pl-4 font-normal leading-normal md:w-2/3 ">
            ul. Powstańców Śląskich 5, pokój 610, Wrocław
          </p>
        </div>
      </aside>
    </form>
  );
}
