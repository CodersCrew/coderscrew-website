import { Button, Hexagon } from '@componentsindex';

export const LeftField = () => (
  <div className="relative">
    <div className="mt-30 pl-10 lg:pl-35">
      <h1 className="mb-[38px] pr-3 text-5xl font-bold">Odkryj swoją ścieżkę kariery w branży IT</h1>
      <p className="mb-[38px] text-base">
        Ucz się przekładając wiedzę na praktykę i wyróżnij się na rynku pracy unikalnym portfolio.
      </p>
      <div className="mb-0 flex-row space-x-6  pr-6 sm:mb-10">
        <Button type="button" label="Zostań partnerem" variant="secondary" onClick={() => {}} />

        <Button type="button" label="Dołącz do nas" variant="primary" onClick={() => {}} />
      </div>
    </div>
    <div className="absolute top-[1rem] left-[-120px] h-[142px] w-[142px] overflow-hidden lg:top-[1rem] lg:left-[-50px]">
      <Hexagon primaryColor="quaternary" variant="default" opacity={100} />
    </div>
  </div>
);
