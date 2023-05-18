import UndrawWorld from '@/common/assets/undrawWorld.svg';
import { Card, Link } from '@/components';

export const HowWeWork = () => (
  <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-8 px-4 py-24 lg:items-stretch lg:gap-34 lg:px-30">
    <div className="grid items-end justify-center gap-6 lg:grid-cols-[50%_50%] lg:gap-0">
      <div className="flex flex-col items-start bg-additional-white lg:gap-8 lg:bg-additional-darkWhite">
        <h2 className="mb-4 mt-6 pl-8 text-2xl font-semibold uppercase text-quaternary lg:pl-0 lg:font-bold">
          Jak działamy?
        </h2>
        <Card
          header=""
          title="Online"
          text="Od czasów pandemii wielu naszych członków to osoby spoza Wrocławia. Nasz największy projekt, CodersCamp, przeprowadziliśmy w ostatnich edycjach całkowicie zdalnie."
        />
        <Card
          header=""
          title="Offline"
          text="Organizujemy hackathon offline z Livechat. Zespoły mogą i spotykają się stacjonarnie, dodatkowo mamy własną, wyposażoną siedzibę. "
        />
      </div>
      <UndrawWorld className="px-7" />
    </div>
    <Link href="/faq" variant="filled" className="self-center">
      Zobacz więcej
    </Link>
  </div>
);
