import { NavElement } from '../components/NavItem/index';
// Card Component mock data

export const cardArticleData = {
  header: 'Kim Jesteśmy ?',
  title: 'Organizacja non-profit z Wrocławia',
  text: 'Najważniejszą rzeczą dla nas jest rozwój – tworzenie społeczności, w której osoby gotowe do działania mogą doskonalić swoje umiejętności.'
};

export const cardDataArticlesArray = [
  {
    header: 'Jak działamy?',
    title: 'Online',
    text: 'Działamy głównie online, choć możemy też spotykać się stacjonarnie. Od czasów pandemii wielu naszych członków to osoby spoza Wrocławia. Nasz największy projekt, CodersCamp, przeprowadziliśmy w ostatnich edycjach całkowicie zdalnie.'
  },
  {
    title: 'Offline',
    text: 'Organizujemy hackathon offline z Livechat. Zespoły mogą i spotykają się stacjonarnie, dodatkowo mamy własną, wyposażoną siedzibę.'
  }
];

// Comment Component mock data

export const CommentTextData = {
  text: 'Dzięki CodersCrew mogę poszerzać moje doświadczenie w zarządzaniu projektami IT. Organizacja dała mi możliwość działania na prawdziwych projektach. Poznałam też mnóstwo cudownie kreatywnych ludzi, których zapał do działania nieustannie podziwiam!',
  name: 'Kornelia'
};

// NavItem Component mock data

export const navItemArr: NavElement[] = [
  {
    label: 'O nas',
    dropdownItems: [
      { dropdownItemLabel: 'Misja i wartości', path: '/mission' },
      { dropdownItemLabel: 'Gildie', path: '/guilds' },
      { dropdownItemLabel: 'Osiągnięcia', path: '/achievements' },
      { dropdownItemLabel: 'Nasza Historia', path: '/history' }
    ]
  },
  {
    label: 'Nasz Zespół',
    dropdownItems: [
      { dropdownItemLabel: 'Matylda Borutka', path: '/matylda' },
      { dropdownItemLabel: 'Zosia Samosia', path: '/zosia' },
      { dropdownItemLabel: 'Artur Twardoręki', path: '/artur' }
    ]
  },
  {
    label: 'Nasze Projekty',
    dropdownItems: [
      { dropdownItemLabel: 'CC website', path: '/ccweb' },
      { dropdownItemLabel: 'Coders Camp', path: '/camp' }
    ]
  }
];
