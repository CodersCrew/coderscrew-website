import menWithLaptops from './assets/men with laptops.png';
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

export const navItemArr = [
  {
    label: 'O nas',
    dropdownItems: [
      { label: 'Misja i wartości', path: '/mission' },
      { label: 'Gildie', path: '/guilds' },
      { label: 'Osiągnięcia', path: '/achievements' },
      { label: 'Nasza Historia', path: '/history' }
    ]
  },
  {
    label: 'Nasz Zespół',
    dropdownItems: [
      { label: 'Matylda Borutka', path: '/matylda' },
      { label: 'Zosia Samosia', path: '/zosia' },
      { label: 'Artur Twardoręki', path: '/artur' }
    ]
  },
  {
    label: 'Nasze Projekty',
    dropdownItems: [
      { label: 'CC website', path: '/ccweb' },
      { label: 'Coders Camp', path: '/camp' }
    ]
  }
];

export const aboveTheFoldData = {
  imageSrc: menWithLaptops,
  imageAlt: 'Men with laptops',
  title: 'Odkryj swoją ścieżkę kariery w branży IT',
  content:
    'Ucz się, przekładając wiedzę na praktykę i wyróżnij się unikalnym portfolio! fffjsjsjskksfsdfsdvfr sfdf fsdfs sfdfsdfsdfwtrf fsfsdfwegwg fdsfawe grwa gregaqreg grea',
  buttonContent: 'Dowiedz się więcej'
};
