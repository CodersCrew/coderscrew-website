import UndrawWorld from '@/common/assets/undrawWorld.svg';
import { Card, Link } from '@/components';

export const HowWeWork = () => (
  <div className="flex flex-col gap-34 px-30 py-24">
    <div className="grid grid-cols-[50%_50%] items-end justify-between">
      <div className="flex flex-col items-start gap-8">
        <h2 className="mb-4 text-center text-2xl font-bold uppercase text-quaternary">Jak działamy?</h2>
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
