import { NavItemPath } from '../components/NavItem';
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
    path: NavItemPath.TEAMS,
    label: 'Zespoły'
  },
  {
    path: NavItemPath.PARTNERS,
    label: 'Partnerzy'
  },
  {
    path: NavItemPath.PROJECTS,
    label: 'Projekty'
  }
];

// Guilds Text Container mock Data

export const guildsTextContainerData = {
  title: 'Wybierz ścieżkę rozwoju dla siebie',
  content: 'Czekają na Ciebie interesujące wyzwania i ciekawe projekty, podczas których przełożysz teorię na praktykę.',
  buttonContent: 'Dołącz do nas'
};

// Guild Cards mock Data

export const guildCardsArray = [
  {
    id: '1',
    primaryColor: 'webDev',
    secondaryColor: 'webDev',
    label: 'Web development',
    text: 'Twórz unikalne strony i aplikacje mobilne',
    descriptionLabel:
      'Nasz najstarszy, największy i sztandarowy dział. W jego ramach będziesz przygotowywać strony i aplikacje webowe.',
    description:
      'Ponadto zyskasz możliwość uczenia innych swojego fachu poprzez prowadzenie warsztatów i prelekcji. Masz do wyboru ścieżkę front-endu, to jest projektowania aspektu wizualnego. Drugą opcją jest back-end, czyli to, czego nie widać.'
  },
  {
    id: '2',
    primaryColor: 'pm',
    secondaryColor: 'pm',
    label: 'Project management',
    text: 'Zarządzaj projektami używając nowoczesnych metod',
    descriptionLabel:
      'Żaden projekt nie ma prawa się udać, jeśli ktoś nim nie zarządza. Jeśli chcesz zostać ogarniaczem wszystkiego, PM zaprasza!',
    description:
      'W tym dziale poznasz najnowocześniejsze metody zarządzania. Będziesz mógł także sprawdzić, co dokładnie jest Twoją ścieżką w zarządzaniu projektami. Product Owner? A może Scrum Master?'
  },
  {
    id: '3',
    primaryColor: 'marketing',
    secondaryColor: 'marketing',
    label: 'Online marketing',
    text: 'Zgłębiaj techniki digital marketingu',
    descriptionLabel:
      'Nasz najstarszy, największy i sztandarowy dział. W jego ramach będziesz przygotowywać strony i aplikacje webowe.',
    description:
      'Ponadto zyskasz możliwość uczenia innych swojego fachu poprzez prowadzenie warsztatów i prelekcji. Masz do wyboru ścieżkę front-endu, to jest projektowania aspektu wizualnego. Drugą opcją jest back-end, czyli to, czego nie widać.'
  },
  {
    id: '4',
    primaryColor: 'ux',
    secondaryColor: 'ux',
    label: 'UX/UI design',
    text: 'Twórz projekty graficzne w oparciu o potrzeby użytkownika',
    descriptionLabel:
      'Nasz najstarszy, największy i sztandarowy dział. W jego ramach będziesz przygotowywać strony i aplikacje webowe.',
    description:
      'Ponadto zyskasz możliwość uczenia innych swojego fachu poprzez prowadzenie warsztatów i prelekcji. Masz do wyboru ścieżkę front-endu, to jest projektowania aspektu wizualnego. Drugą opcją jest back-end, czyli to, czego nie widać.'
  },
  {
    id: '5',
    primaryColor: 'dataScience',
    secondaryColor: 'dataScience',
    label: 'Human Resources',
    text: 'Zarządzaj naszymi zasobami ludzkimi',
    descriptionLabel:
      'Nasz najstarszy, największy i sztandarowy dział. W jego ramach będziesz przygotowywać strony i aplikacje webowe.',
    description:
      'Ponadto zyskasz możliwość uczenia innych swojego fachu poprzez prowadzenie warsztatów i prelekcji. Masz do wyboru ścieżkę front-endu, to jest projektowania aspektu wizualnego. Drugą opcją jest back-end, czyli to, czego nie widać.'
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
