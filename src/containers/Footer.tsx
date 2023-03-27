import Logo from '@/common/assets/logoWhite.svg';

export const Footer = () => (
  <div className="mx-auto grid grid-flow-row gap-10 bg-primary py-10 px-15 text-additional-white md:px-30 lg:grid-cols-[170px,1fr,min-content] lg:gap-26">
    <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-y-5">
      <div className="flex flex-col gap-4">
        <Logo className="h-6" />
        <p className="text-center text-base leading-normal md:text-left md:text-xs lg:text-start lg:text-xs">
          Rozwijamy pasję do działania i wspieramy w rozwoju w wybranej ścieżce kariery z branży IT.
        </p>
      </div>
      <p className="text-center text-sm md:text-left md:text-xs lg:text-start">kontakt@coderscrew.pl</p>
    </div>
    <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-stretch ">
      <div className="flex flex-col items-center gap-4 md:items-stretch">
        <h3 className="text-xl font-bold md:text-base">Poznaj nas</h3>
        <p className="text-xl md:text-sm">Zespoły</p>
        <p className="text-xl md:text-sm">Partnerzy</p>
        <p className="text-xl md:text-sm">Projekty</p>
        <p className="text-xl md:text-sm">FAQ</p>
      </div>
      <div className="flex flex-col items-center gap-4 md:items-stretch">
        <h3 className="text-xl font-bold md:text-base">Działajmy razem</h3>
        <p className="text-xl md:text-sm">Współpraca</p>
        <p className="text-xl md:text-sm">Dołącz do nas</p>
      </div>
      <div className="flex flex-col items-center gap-4 md:items-stretch">
        <h3 className="text-xl font-bold md:text-base">Do pobrania</h3>
        <p className="text-xl md:text-sm">Presspack</p>
        <p className="text-xl md:text-sm">Polityka prywatności</p>
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
