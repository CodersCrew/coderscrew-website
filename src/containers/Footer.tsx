import Logo from '@/common/assets/logoWhite.svg';

export const Footer = () => (
  <div className="grid grid-cols-[170px,1fr,min-content] gap-26 bg-primary py-10 px-30 text-additional-white">
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <Logo className="h-6" />
        <p className="text-xs leading-normal">
          Rozwijamy pasję do działania i wspieramy w rozwoju w wybranej ścieżce kariery z branży IT.
        </p>
      </div>
      <p className="text-xs">kontakt@coderscrew.pl</p>
    </div>
    <div className="flex justify-between">
      <div className="flex flex-col gap-4">
        <h3 className="font-bold">Poznaj nas</h3>
        <p className="text-sm">Zespoły</p>
        <p className="text-sm">Partnerzy</p>
        <p className="text-sm">Projekty</p>
        <p className="text-sm">FAQ</p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold">Działajmy razem</h3>
        <p className="text-sm">Współpraca</p>
        <p className="text-sm">Dołącz do nas</p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold">Do pobrania</h3>
        <p className="text-sm">Presspack</p>
        <p className="text-sm">Polityka prywatności</p>
      </div>
    </div>
    <div className="flex flex-col items-end justify-between">
      <div className="flex gap-2">
        <div className="h-10 w-10 bg-quaternary" />
        <div className="h-10 w-10 bg-quaternary" />
        <div className="h-10 w-10 bg-quaternary" />
        <div className="h-10 w-10 bg-quaternary" />
      </div>
      <p className="text-sm">© CodersCrew 2022</p>
    </div>
  </div>
);
