import centrumInnowacjiPrzejscie from 'assets/projects/centrumInnowacjiPrzejscie.png';
import codersCamp from 'assets/projects/codersCamp.png';
import girlsRunTheCode from 'assets/projects/girlsRunTheCode.png';
import jiraStickyNotes from 'assets/projects/jiraStickyNotes.png';
import maliWspaniali from 'assets/projects/maliWspaniali.png';
import slideDecks from 'assets/projects/slideDecks.png';
import Image from 'next/image';

import { SectionWrapper } from '@/components';

const projectsData = [
  {
    title: 'CodersCamp',
    description:
      'Największy otwarty i całkowicie darmowy kurs programowania webowego w Polsce. Przeprowadziliśmy dotąd 7 edycji, w ramach których wsparliśmy aż 1184 osoby w ich rozwoju i daliśmy możliwość darmowego nabycia nowych kompetencji.',
    image: codersCamp
  },
  {
    title: 'Girls run the code',
    description:
      'Bezpłatne warsztaty programowania webowego, a także planowania kariery i poszukiwania pracy w IT dla kobiet w wieku 18-24 lat. Po ich zakończeniu uczestniczki mają możliwość dalszego rozwoju dzięki kursom dostępnym na platformie Udemy.',
    image: girlsRunTheCode
  },
  {
    title: 'SlideDecks',
    description:
      'Intuicyjne, szybkie i kompleksowe narzędzie do tworzenia prezentacji. Adresowana przede wszystkim dla programistów, by mogli skutecznie przekonywać klientów do swoich projektów. To z pomocą SlideDecks powstawały prezentacje na naszych kursach w Centrum Innowacji Przejście.',
    image: slideDecks
  },
  {
    title: 'Jira Sticky Notes',
    description:
      'Nasz wkład w Jirę, sztandarowy program do zarządzania w IT. Z wykorzystaniem Reduxa, Reacta, Node’a, Expressa, PostrgreSQL oraz Atlaskita i przy współpracy z Deviniti stworzyliśmy add-on umożliwiający tworzenie karteczek przylepnych w Jirze. To jednak nie wszystko! Twórcom dano szansę sprawdzenia się jako stażyści Deviniti.',
    image: jiraStickyNotes
  },
  {
    title: 'Centrum Innowacji Przejście',
    description:
      'Uwielbiamy uczyć programowania do tego stopnia, że CodersCamp nie wystarcza. By spożytkować naszą pasję, prowadzimy także warsztaty w Centrum Innowacji Przejście. W ich ramach uczymy wszystkich chętnych praktycznych podstaw HTML i CSS.',
    image: centrumInnowacjiPrzejscie
  },
  {
    title: 'Mali wspaniali',
    description:
      'Chcąc zmieniać świat, pomogliśmy Fundacji Mali Wspaniali w ich walce z otyłością wśród najmłodszych. Nasza aplikacja umożliwia monitorowanie i poprawianie sprawności dziecka. Program automatyzuje kwestie rozwoju sprawności dziecka, a także zarządzanie tym procesem w placówkach edukacyjnych.',
    image: maliWspaniali
  }
];

const Projects = () => (
  <SectionWrapper className="pt-3">
    <h1 className="mb-8 text-3.5xl font-bold leading-tight md:mb-25 md:text-5xl">
      Nasze projekty
    </h1>
    <div>
      {projectsData.map(({ title, description, image }) => (
        <div
          className="mb-16 flex flex-col md:mb-40 md:flex-row md:odd:flex-row-reverse"
          key={title}
        >
          <div className="md:w-1/2 md:px-10">
            <h2 className="mb-6 text-2xl font-semibold md:mb-8 md:text-3xl">
              {title}
            </h2>
            <p className="mb-6 md:text-xl">{description}</p>
          </div>
          <div className="md:w-1/2">
            <Image src={image} alt={title} />
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
