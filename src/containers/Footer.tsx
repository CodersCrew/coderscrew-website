import Logo from '@/common/assets/logoWhite.svg';

export const Footer = () => (
  <div className="mx-auto grid grid-flow-row gap-10 bg-primary py-10 px-15 text-additional-white lg:gap-26 md:px-30 lg:grid-cols-[170px,1fr,min-content]">
    <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-y-5">
      <div className="flex flex-col gap-4">
        <Logo className="h-6" />
        <p className="text-center md:text-left text-md leading-normal lg:text-start md:text-xl lg:text-xs">
          Rozwijamy pasję do działania i wspieramy w rozwoju w wybranej ścieżce kariery z branży IT.
        </p>
      </div>
      <p className="text-center md:text-left text-xs lg:text-start">kontakt@coderscrew.pl</p>
    </div>
    <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-stretch ">
      <div className="flex flex-col items-center gap-4 md:items-stretch">
        <h3 className="font-bold text-[20px]">Poznaj nas</h3>
        <p className="text-md md:text-sm">Zespoły</p>
        <p className="text-md md:text-sm">Partnerzy</p>
        <p className="text-md md:text-sm">Projekty</p>
        <p className="text-md md:text-sm">FAQ</p>
      </div>
      <div className="flex flex-col items-center gap-4 md:items-stretch">
        <h3 className="font-bold text-[20px]">Działajmy razem</h3>
        <p className="text-md md:text-sm">Współpraca</p>
        <p className="text-md md:text-sm">Dołącz do nas</p>
      </div>
      <div className="flex flex-col items-center gap-4 md:items-stretch">
        <h3 className="font-bold text-[20px]">Do pobrania</h3>
        <p className="text-md md:text-sm">Presspack</p>
        <p className="text-md md:text-sm">Polityka prywatności</p>
      </div>
    </div>
    <div className="flex flex-col items-center justify-between gap-y-8 lg:items-end">
      <div className="flex gap-2">
        <div className="h-10 w-10 bg-quaternary" />
        <div className="h-10 w-10 bg-quaternary" />
        <div className="h-10 w-10 bg-quaternary" />
        <div className="h-10 w-10 bg-quaternary" />
      </div>
      <p className="text-sm">&copy; CodersCrew 2022</p>
    </div>
  </div>
);
