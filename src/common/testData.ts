// Card Component mock data

import challengeRocket from './assets/logotypes/challenge rocket logo.png';
import deviniti from './assets/logotypes/deviniti logo.png';
import divante from './assets/logotypes/divante logo.png';
import freshmail from './assets/logotypes/freshmail-logo-dark 1.png';
import livechat from './assets/logotypes/livechat logo.png';

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

export const logotypes = [
  { id: 1, src: challengeRocket, alt: 'logo challenge Rocket' },
  { id: 2, src: deviniti, alt: 'logo deviniti' },
  { id: 3, src: divante, alt: 'logo divante' },
  { id: 4, src: freshmail, alt: 'logo freshmail' },
  { id: 5, src: livechat, alt: 'logo livechat' }
];
