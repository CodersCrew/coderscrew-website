import UndrawWorld from '@/common/assets/undrawWorld.svg';
import { Card, Link } from '@/components';

export const HowWeWork = () => (
  <div className="flex flex-col items-center gap-34 py-24  lg:items-stretch lg:px-30">
    <div className="grid items-end justify-between lg:grid-cols-[50%_50%] gap-6 lg:gap-0">
      <div className="flex flex-col items-start bg-additional-white lg:items-center lg:gap-8 lg:bg-additional-darkWhite">
        <h2 className="mb-4 mt-6 pl-8 text-2xl font-bold uppercase text-quaternary lg:pl-0 xl:text-center">
          Jak działamy?
        </h2>
        <Card
          title="Online"
          text="Od czasów pandemii wielu naszych członków to osoby spoza Wrocławia. Nasz największy projekt, CodersCamp, przeprowadziliśmy w ostatnich edycjach całkowicie zdalnie."
        />
        <Card
          title="Offline"
          text="Organizujemy hackathon offline z Livechat. Zespoły mogą i spotykają się stacjonarnie, dodatkowo mamy własną, wyposażoną siedzibę. "
        />
      </div>
      <UndrawWorld />
    </div>
    <Link href="#" variant="filled" className="self-center">
      Zobacz więcej
    </Link>
  </div>
);
