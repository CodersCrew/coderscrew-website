const PrivacyPolicy = () => {
  const scrollToSection = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView();
  };

  const sideBarTitles: string[] = [
    'Informacje o przetwarzaniu danych osobowych',
    '1. Administrator danych osobowych',
    '2. Sposób pozyskiwania danych osobowych',
    '3. Rodzaje pozyskiwania danych osobowych',
    '4. Podstawa prawna przetwarzania danych osobowych',
    '5. Przekazywanie danych osobowych poza europejski obszar gospodarczy',
    '6. Przekazywanie danych osobowych innym podmiotom',
    '7. Czas przechowywania danych osobowych',
    '8. Uprawnienia dotyczące przekazywania danych osobowych',
    '9. Prawo do cofnięcia zgody przetwarzania danych osobowych',
    '10. Prawo do zlożenia skargi',
    '11. Ochrona danych osobowych',
    '12. Postanowienia końcowe',
    'II. Informacje dotyczące strony internetowej stowarzyszenia i jego dzialałności online',
    'III. Postanowienia końcowe'
  ];

  return (
    <div className="px-4 pb-8 sm:px-8 md:pb-18 lg:pb-24 xl:px-30">
      <div className="fixed bottom-70 top-30 hidden overflow-y-scroll md:block md:w-1/3">
        <h2 className="mb-10 text-2xl font-semibold">Menu</h2>
        {sideBarTitles.map((title, index) => (
          <div className="mb-5" key={index}>
            <button
              className="text-left text-2xl font-semibold"
              onClick={() => scrollToSection(`section-${index}`)}
            >
              {title}
            </button>
          </div>
        ))}
      </div>
      <div className="ml-auto py-10 md:w-1/2 md:bg-grey md:px-5">
        <h1 className="pb-10 text-2xl font-semibold uppercase md:text-3.5xl">
          Polityka Prywatności
        </h1>
        <section className="mb-10" id="section-0">
          <h2 className="mb-5 text-xl font-semibold md:pb-10">
            Informacje o przetwarzaniu danych osobowych
          </h2>
          <p className="mb-5">
            Informujemy, że Stowarzyszenie CodersCrew z siedzibą we Wrocławiu
            przetwarza dane, które na gruncie Rozporządzenia Parlamentu
            Europejskiego i Rady Unii Europejskiej 2016/679 z dnia 27 kwietnia
            2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem
            danych osobowych i w sprawie swobodnego przepływu takich danych oraz
            uchylenia dyrektywy 95/46/WE (zwanego dalej: “RODO”), mają charakter
            danych osobowych.
          </p>
          <p className="mb-5">
            Zgodnie z obowiązującymi przepisami dotyczącymi ochrony danych
            osobowych, w szczególności z Ogólnym Rozporządzeniem, celem
            zapewnienia właściwej ochrony danych osobowych, osobie której dane
            dotyczą należy przede wszystkim podać informacje dotyczące
            przetwarzania jej danych osobowych określone w art. 13 lub 14 RODO –
            w zależności od tego, czy zostały one pozyskane bezpośrednio od
            osoby której dane dotyczą, czy też z innych źródeł.
          </p>
          <p>W świetle powyższego pragniemy poinformować, że:</p>
        </section>

        <section className="mb-10" id="section-1">
          <h2 className="mb-5 text-xl">1. Administrator danych osobowych</h2>
          <p className="mb-5">
            Administratorem Twoich danych osobowych jest Stowarzyszenie
            CodersCrew z siedzibą we Wrocławiu (ul. Drukarska 37/78, 53-311
            Wrocław), wpisane do rejestru stowarzyszeń Krajowego Rejestru
            Sądowego prowadzonego przez Sąd Rejonowy dla Wrocławia-Fabrycznej we
            Wrocławiu, VI Wydział Gospodarczy Krajowego Rejestru Sądowego, pod
            numerem KRS: 0000744745, NIP: 8992849210, REGON: 381026903 (dalej:
            “Stowarzyszenie”).
          </p>
          <p>Ze Stowarzyszeniem można się skontaktować:</p>
          <ol>
            <li>
              1) pisemnie na adres: Stowarzyszenie CodersCrew, ul. Drukarska
              37/78, 53-311 Wrocław,
            </li>
            <li>2) pocztą elektroniczną: rodo@coderscrew.pl</li>
            <li>3) lub pod numerem telefonu 534 900 526.</li>
          </ol>
        </section>

        <section className="mb-10" id="section-2">
          <h2 className="mb-5 text-xl">
            2. Sposób pozyskiwania danych osobowych
          </h2>
          <p className="mb-5">
            Informujemy, że Stowarzyszenie jest uprawnione do pozyskiwania
            Twoich danych osobowych:
          </p>
          <p>1) bezpośrednio od Ciebie, na przykład w sytuacji, gdy:</p>
          <ol className="mb-5">
            <li>
              a) skontaktujesz się ze Stowarzyszeniem, podając przy tym swój
              adres e-mail, imiona, nazwisko lub jakiekolwiek inne dane osobowe
              (takie jak numer telefonu, adres zamieszkania, wykształcenie,
              zainteresowania (hobby), doświadczenie zawodowe, status studenta
              (Uczelnia, kierunek i rok studiów, numer indeksu), aktualne
              miejsce zatrudnienia lub zajmowane stanowisko, informacje o
              poszukiwaniu pracy itp.)
            </li>
            <li>
              b) wstąpisz do lub będziesz działał na rzecz Stowarzyszenia,
            </li>
            <li>
              c) weźmiesz udział w wydarzeniu organizowanym przez
              Stowarzyszenie,
            </li>
            <li> d) przekażesz darowiznę na rzecz Stowarzyszenia,</li>
            <li>
              e) odwiedzisz stronę internetową lub pozostałe media (np. kanały
              social media) Stowarzyszenia lub organizowanego przez nie
              wydarzenia,
            </li>
          </ol>
          <p>2) od podmiotów trzecich, na przykład od:</p>
          <ol className="mb-5">
            <li>a) mocodawcy w razie udzielonego pełnomocnictwa, </li>
            <li>b) pracodawcy, </li>
            <li>c) strony czynności prawnej zawartej ze Stowarzyszeniem,</li>
            <li> d)Twojego przedstawiciela ustawowego,</li>
          </ol>
          <p className="mb-5">jak również z powszechnie dostępnych:</p>
          <ol>
            <li>
              e) ewidencji i baz danych, takich jak Krajowy Rejestr Sądowy czy
              Centralna Ewidencja i Informacja o Działalności Gospodarczej,
            </li>
            <li>
              f) informacji, które zamieszczasz na publicznych profilach w
              portalach i mediach społecznościowych, takich jak LinkedIn, GitHub
              czy Facebook.
            </li>
          </ol>
        </section>

        <section className="mb-10" id="section-3">
          <h2 className="mb-5 text-xl">
            3. Rodzaje pozyskiwania danych osobowych
          </h2>
          <p className="mb-5">
            Rodzaj pozyskiwanych danych osobowych i cel ich przetwarzania zależy
            od konkretnej sytuacji i może obejmować w szczególności:
          </p>
          <p>
            imiona, nazwisko, dane kontaktowe (np. adres zamieszkania lub poczty
            elektronicznej, numer telefonu) - w tym zwłaszcza w celu
            kontaktowania się z Tobą przez Stowarzyszenie, w szczególności gdy:
          </p>
          <ul className="mb-5">
            <li>
              - zgłosiłeś/aś chęć uczestnictwa w jego aktywnościach (np. poprzez
              udział w rekrutacji do Stowarzyszenia) czy organizowanych przez
              nie wydarzeniach,
            </li>
            <li>- zwróciłeś/aś się z zapytaniem do Stowarzyszenia</li>
            <li>
              - zainicjowałeś podjęcie przez Stowarzyszenie jakichkolwiek
              czynności na Twoją rzecz, jak również dla założenia Twojej
              skrzynki pocztowej w domenie Stowarzyszenia, a także do celów
              marketingowych,
            </li>
          </ul>
          <p>informacje o:</p>
          <ul>
            <li>
              - wykształceniu, zainteresowaniach (hobby) i doświadczeniu
              zawodowym,
            </li>
            <li>
              - o statusie studenta (Uczelnia, kierunek i rok studiów, numer
              indeksu),
            </li>
            <li>- o aktualnym miejscu zatrudnienia i zajmowanym stanowisku,</li>
            <li>- o poszukiwaniu pracy,</li>
            <li>
              - o utworzonych przez Ciebie profilach na portalach typu LinkedIn
              czy GitHub
            </li>
            <p>na przykład w celu:</p>
            <ul>
              <li>
                - otrzymania przez Ciebie dodatkowych korzyści (takich jak
                możliwość wypożyczania większej ilości książek na niektórych
                uczelniach, związana z działaniem na rzecz Stowarzyszenia),
              </li>
              <li>
                - zarekomendowania Twojej kandydatury firmom współpracującym ze
                Stowarzyszeniem, poszukującym pracowników, współpracowników lub
                stażystów,
              </li>
              <li>
                - zaoferowania Twojego uczestnictwa w konferencjach, szkoleniach
                i innych wydarzeniach,
              </li>
            </ul>
            <li className="mb-5">
              lepszego dopasowania projektów i działań oferowanych przez
              Stowarzyszenie do Twojego wykształcenia i preferowanych kierunków
              rozwoju zawodowego, informacje o aktywności w ramach lub na rzecz
              Stowarzyszenia, w tym w organizowanych przez nie wydarzeniach, a
              także o dacie rozpoczęcia Twojej współpracy ze Stowarzyszeniem i o
              działach Stowarzyszenia, w których jesteś aktywny/a – zwłaszcza
              dla celów dostosowywania się do Twoich potrzeb (np. zaproponowania
              uczestnictwa w kolejnych projektach, odpowiednich do Twojego
              kierunku rozwoju),
            </li>
          </ul>
          wizerunek (zdjęcia) – na przykład dla celów marketingowych
          Stowarzyszenia, takich jak publikacja w social mediach zdjęć z
          organizowanych przez Stowarzyszenie wydarzeń, w których brałeś/aś
          udział, lub umieszczenie Twojego zdjęcia na skrzynce mailowej G Suite,
          tworzonej w domenie Stowarzyszenia.
          <p>
            UWAGA: Prosimy, abyś nie przekazywał Stowarzyszeniu danych
            wrażliwych, tj. ujawniających m. in. pochodzenie rasowe lub
            etniczne, poglądy polityczne, przekonania światopoglądowe lub
            religijne czy też przynależność do związków zawodowych, jak również
            danych genetycznych, biometrycznych, dotyczących stanu zdrowia,
            seksualności (w tym orientacji seksualnej), nałogów lub orzeczeń
            wydanych w postępowaniu sądowym (w tym karnym) lub administracyjnym.
            Nikt nie będzie też Ciebie prosił o ujawnienie tych danych.
          </p>
          <p>
            Inne cele przetwarzania przez Stowarzyszenie Twoich danych osobowych
            mogą polegać na przykład na:
          </p>
          <ol>
            <li>
              1) zabezpieczeniu działań: a) organizacyjnych (np.
              administracyjnych lub księgowych), b) sprawozdawczych, c)
              statystycznych lub d) archiwizacyjnych Stowarzyszenia,
            </li>
            <li>
              2) podejmowaniu czynności prawnych i faktycznych, których stroną
              jest Stowarzyszenie,
            </li>
            <li>
              3) udostępnianiu treści marketingowych promujących działalność
              Stowarzyszenia i analizie ich skuteczności,
            </li>
            <li>4) realizacji zobowiązań prawnych Stowarzyszenia.</li>
          </ol>
          <p>
            W zależności od celu, dla którego dane osobowe zostały pozyskane,
            podstawa prawna ich przetwarzania, okres przechowywania, sposób
            pozyskiwania i zakres udostępniania innym podmiotom mogą się różnić.
          </p>
        </section>

        <section className="pb-10" id="section-4">
          <h2 className="pb-5 text-xl">
            4. Podstawa prawna przetwarzania danych osobowych
          </h2>
          <p>
            Twoje dane osobowe będą przetwarzane na podstawie i w granicach
            obowiązujących przepisów prawa, w tym w szczególności RODO, przy
            czym podstawa ta zależy od konkretnej sytuacji i może nią być na
            przykład:
          </p>
          <ol>
            <li>
              1) Twoja dobrowolna zgoda (art. 6 ust. 1 lit. a) RODO) – w
              szczególności gdy wyrazisz chęć działania w ramach Stowarzyszenia
              lub na jego rzecz, jak również udziału w organizowanych przez nie
              wydarzeniach, czy też skorzystania z oferowanych przez nie
              korzyści, takich jak możliwość zarekomendowania Twojej kandydatury
              firmom, z którymi współpracuje Stowarzyszenie. Zgoda jest
              dobrowolna, ale w niektórych sytuacjach odmowa jej udzielenia
              uniemożliwi podjęcie określonych czynności, np. rozpatrzenie
              Twojego uczestnictwa w wydarzeniu organizowanym przez
              Stowarzyszenie,
            </li>
            <li>
              2) konieczność wykonania umowy, której jesteś stroną (np. gdy
              Stowarzyszenie zamówi oferowany przez Ciebie towar lub usługę),
              lub podjęcia działań na Twoje żądanie przed zawarciem umowy (art.
              6 ust. 1 lit. b) i c) RODO),
            </li>
            <li>
              3) konieczność realizacji prawnie uzasadnionych interesów
              Stowarzyszenia, takich jak ustalenie i dochodzenie przysługujących
              mu roszczeń (art. 6 ust. 1 lit. f) RODO).
            </li>
          </ol>
          Powyższy katalog nie ma charakteru zamkniętego co oznacza, że w
          przypadkach, w których istnieje inna podstawa prawna do przetwarzania
          Twoich danych osobowych, Stowarzyszenie może z niej skorzystać, o czym
          zostaniesz odpowiednio poinformowany, zgodnie z obowiązującymi
          przepisami prawa.
        </section>

        <section className="pb-10" id="section-5">
          <h2 className="pb-5 text-xl">
            5. Przekazywanie danych osobowych poza europejski obszar gospodarczy
          </h2>
          <p>
            Stowarzyszenie nie przewiduje przekazywania Twoich danych osobowych
            poza Europejski Obszar Gospodarczy (do państw trzecich) ani do
            organizacji międzynarodowych.
          </p>
        </section>

        <section className="pb-10" id="section-6">
          <h2 className="pb-5 text-xl">
            6. Przekazywanie danych osobowych innym podmiotom
          </h2>
          <p>Twoje dane osobowe mogą być udostępniane przez Stowarzyszenie:</p>
          <ol>
            <li>
              1) osobom fizycznym, prawnym lub jednostkom organizacyjnym
              nieposiadającym osobowości prawnej, które współpracują ze
              Stowarzyszeniem lub świadczą na jego rzecz usługi (w tym m. in.
              usługi doradcze lub audytowe, pomoc prawną, podatkową, rachunkową
              lub marketingową), lub wspierają je organizacyjnie lub
              technicznie, w zakresie odpowiednim do celu, dla którego
              przetwarzane są Twoje dane osobowe,
            </li>
            <li>
              2) podmiotom prowadzącym działalność pocztową, kurierską,
              płatniczą lub pośrednictwa w płatnościach, w zakresie odpowiednim
              do celu, dla którego przetwarzane są Twoje dane osobowe,
            </li>
            <li>
              3) podmiotom i organom, którym Stowarzyszenie jest zobowiązane lub
              upoważnione udostępnić dane osobowe na podstawie powszechnie
              obowiązujących przepisów prawa.
            </li>
          </ol>
        </section>

        <section className="pb-10" id="section-7">
          <h2 className="pb-5 text-xl">
            7. Czas przechowywania danych osobowych
          </h2>
          <p>
            Twoje dane osobowe będą przechowywane przez okres odpowiedni dla
            celu, w którym są przetwarzane, każdorazowo nie dłużej niż do chwili
            cofnięcia przez Ciebie zgody na przetwarzanie danych osobowych,
            chyba że istnieje inna podstawa prawna do ich dalszego
            przetwarzania.
          </p>
        </section>

        <section className="pb-10" id="section-8">
          <h2 className="pb-5 text-xl">
            8. Uprawnienia dotyczące przekazywania danych osobowych
          </h2>
          <p>
            W związku z przetwarzaniem przez Stowarzyszenie Twoich danych
            osobowych, przysługuje Ci prawo do:
          </p>
          <ol>
            <li>
              1) żądania informacji czy, jakie i w jakim celu przechowywane są
              Twoje dane osobowe,
            </li>
            <li>
              2) żądania usunięcia Twoich danych osobowych, jeżeli nie istnieją
              powody uzasadniające ich dalsze przetwarzanie,
            </li>
            <li>
              3) żądania dostępu do Twoich danych osobowych, w tym uzyskania ich
              kopii, a także sprawdzenia, czy są przetwarzane zgodnie z prawem,
            </li>
            <li>
              4) żądania sprostowania Twoich danych osobowych, w tym
              uzupełnienia danych niekompletnych i sprostowania niepoprawnych,
            </li>
            <li>
              5) żądania ograniczenia przetwarzania Twoich danych osobowych, w
              tym jego zawieszenia,
            </li>
            <li>
              6) żądania przeniesienia Twoich danych osobowych do innego
              administratora, co umożliwia pobranie od Stowarzyszenia danych w
              formacie umożliwiającym wykorzystanie ich w formie elektronicznej
              oraz przeniesienie danych do innej osoby w formacie umożliwiającym
              ich wykorzystanie w formie elektronicznej,
            </li>
            <li>
              7) wniesienia sprzeciwu wobec przetwarzania Twoich danych
              osobowych na zasadach określonych w RODO, w tym zwłaszcza gdy
              przetwarzanie zachodzi w oparciu o uzasadniony interes
              Stowarzyszenia. Ponadto przysługuje Ci prawo do sprzeciwu, jeżeli
              Twoje dane osobowe przetwarzane są w bezpośrednich celach
              marketingowych,
            </li>
            <li>
              8) sprzeciwu wobec zautomatyzowanego podejmowania decyzji, w tym
              profilowania, jeśli takowe będzie miało miejsce.
            </li>
          </ol>
        </section>

        <section className="pb-10" id="section-9">
          <h2 className="pb-5 text-xl">
            9. Prawo do cofnięcia zgody przetwarzania danych osobowych
          </h2>
          <p>
            Jeśli przetwarzanie Twoich danych osobowych następuje na podstawie
            dobrowolnej zgody, w każdej chwili przysługuje Ci prawo do cofnięcia
            zgody na przetwarzanie danych osobowych, jeżeli nie istnieją powody
            uzasadniające ich dalsze przetwarzanie. Wycofanie zgody nie wpływa
            na zgodność z prawem przetwarzania, którego dokonano na podstawie
            zgody przed jej wycofaniem. Swoją zgodę możesz wycofać wysyłając nam
            informację o cofnięciu zgody na adres e-mail rodo@coderscrew.pl.
          </p>
        </section>

        <section className="pb-10" id="section-10">
          <h2 className="pb-5 text-xl">10. Prawo do złożenia skargi </h2>
          <p>
            Informujemy, że przysługuje Ci prawo do złożenia skargi do organu
            nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych.
          </p>
        </section>

        <section className="pb-10" id="section-11">
          <h2 className="pb-5 text-xl">11. Ochrona danych osobowych</h2>
          <p>
            Stowarzyszenie dokłada wszelkich starań, aby zapewnić niezbędne
            środki fizycznej, technicznej i organizacyjnej ochrony danych
            osobowych przed ich przypadkowym czy umyślnym zniszczeniem,
            przypadkową utratą, zmianą, nieuprawnionym ujawnieniem,
            wykorzystaniem lub dostępem, zgodnie z obowiązującymi przepisami
            prawa.
          </p>
        </section>

        <section className="pb-10" id="section-12">
          <h2 className="pb-5 text-xl">12. Postanowienia końcowe</h2>
          <p>
            Stowarzyszenie jest uprawnione do jednostronnej modyfikacji
            niniejszej Informacji o przetwarzaniu danych osobowych, przy czym
            zmiany wchodzą w życie z dniem ich publikacji na stronie
            internetowej 14.11.2019 r.
          </p>
          <p>Polityka prywatności Stowarzyszenia znajduje się tutaj.</p>
        </section>

        <section className="pb-10" id="section-13">
          <h2 className="pb-5 text-xl">
            II. Informacje dotyczące strony internetowej stowarzyszenia i jego
            dzialałności online
          </h2>
          <p>
            Do niniejszej sekcji należy w całości stosować postanowienia Sekcji
            I („Informacje ogólne”), a wyodrębnienie informacji dotyczących
            przetwarzania Twoich danych osobowych, związanych z aktywnością
            online, ma charakter porządkujący. Dzięki temu łatwiej odnajdziesz
            kwestie obejmujące m. in politykę cookies.
          </p>
          <p>
            Stowarzyszenie korzysta na prowadzonych przez siebie stronach
            internetowych (tj. na stronie Stowarzyszenia www.
            https://coderscrew.pl/, jak na również innych witrynach,
            obejmujących między innymi wydarzenia organizowane przez
            Stowarzyszenie – np.https://coderscamp.edu.pl/) z plików cookies,
            tj. informacji wysyłanych przez serwis do przeglądarki użytkownika,
            które są odsyłane z powrotem przez przeglądarkę przy kolejnych
            wejściach na witrynę.
          </p>
        </section>

        <section className="pb-10" id="section-14">
          <h2 className="pb-5 text-xl">III. Postanowienia końcowe</h2>
          <p>
            Stowarzyszenie jest uprawnione do jednostronnej modyfikacji
            niniejszej Polityki, przy czym zmiany wchodzą w życie z dniem ich
            publikacji na stronie internetowej
            https://coderscrew.pl/polityka-prywatnosci/.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
