import React from 'react';

const PhysicsContent = () => {
  return (
    <>
      <div className="about about-physics">
        <h2 className="about--header header">O NAS</h2>
        <p className="about--text about--text-physics">
          W ramach fizyki po godzinach uczniowie będą pracowali na zajęciach w
          oparciu o podstawę programową nauczania fizyki w szkole, ale nie będą
          to zajęcia, na których realizujemy temat po temacie z podręcznika. W
          młodszej grupie będą to głowie zajęcia mające pomóc zrozumieć na
          poziomie intuicyjnym omawiane działy fizyki, a dodatkowo wprowadzony
          zostanie aparat matematyczny na poziomie odpowiednim dla młodego wieku
          uczniów, ale równocześnie pozwalający samodzielnie rozwiązywać zadania
          z fizyki i uczyć przy tym logicznego myślenia. W grupie starszej
          zajęcia początkowo będą skupiały się na zrozumieniu odmawianych
          działów fizyki, a następnie będą ukierunkowane na rozwiązywanie zadań
          z treścią o różnym stopniu trudności, tak aby docelowo pomóc w
          przygotowaniu młodzieży do matury z fizyki na poziomie podstawowym i
          rozszerzonym.
        </p>
        <p className="about--text about--text-physics">
          W ramach Fizyki po godzinach uczestnicy będą mieli spotkania z{' '}
          <bold>dr hab. prof. UM w Gdyni Bogusławem Pranszke</bold>, które
          podzielone będą na zajęcia lekcyjne oraz na wykłady popularnonaukowe.
          Podczas zajęć uczniowie będą poszerzali wiedzę zdobytą podczas zajęć
          podstawowych, głównie poprzez rozwiązywanie bardziej złożonych
          problemów fizycznych pod okiem prowadzącego. W razie potrzeby możliwe
          jest również wprowadzanie na zajęciach bardziej złożonego aparatu
          matematycznego, który ułatwi szersze zrozumienie zagadnienia. Wykłady
          popularnonaukowe będą miłą odskocznią, od znojów codziennej szkolnej
          fizyki. Opierać się one będą głównie na zagadnieniach związanych z
          kosmosem i grawitacją. Nie wymagają one umiejętności matematycznych,
          ale pozwalają szeroko spojrzeć na omawiane zagadnienia oraz zrozumieć
          rys historyczny, który doprowadził do poszczególnych odkryć.
        </p>
        <p className="about--text about--text-physics">
          Ponadto uczestnicy będą mieli wykłady z fizyki z, które prowadzone
          będą po angielsku. Wykłady będą dotyczyły zagadnień dobrze znanych
          młodzieży, a ich celem będzie zaznajomienie się i oswojenie z językiem
          angielskim wykorzystywanym w fizyce. Dodatkowo zorganizowane będą
          wyjazdy na Uniwersytet Morski w Gdyni, gdzie młodzież będzie
          uczestniczyła zarówno w zajęciach teoretycznych prowadzonychprzez
          pracowników tej uczelni jak i w zajęciach doświadczalnych.
        </p>
      </div>
      <div className="program-mobile">
        <h2 className="about--header header">PROGRAM</h2>
        <div className="program-section">
          <h2>zajęcia podstawowe</h2>
          <p>
            <bold>Prowadzący:</bold> Ignacy Rejmak
            <br />
            <bold>Czas trwania:</bold> 90 minut
            <br />
            <bold>Dzień tygodniach:</bold>
            <ul>
              <li>poniedziałek (17:30 - 19:30)</li>
              <li>czwartek (18:00 - 19:30)</li>
            </ul>
            <bold>Ilość zajęć:</bold> raz w tygodniu
          </p>
        </div>
        <div className="program-section">
          <h2>zajęcia dodatkowe</h2>
          <p>
            <bold>Prowadzący:</bold> dr hab. Bogusław Praszke
            <br />
            <bold>Czas trwania:</bold> 120 minut
            <br />
            <bold>Dzień tygodniach:</bold> sobota
            <br />
            <bold>Ilość zajęć:</bold> cztery razy w roku szkolnym zajęcia
            odbywają się w tym samym dniu wykładowym
          </p>
        </div>
        <div className="program-section">
          <h2>wykłady</h2>
          <p>
            <bold>Prowadzący:</bold> dr hab. Bogusław Praszke
            <br />
            <bold>Czas trwania:</bold> 90 minut
            <br />
            <bold>Dzień tygodniach:</bold> sobota
            <br />
            <bold>Ilość zajęć:</bold> cztery razy w roku szkolnym zajęcia
            odbywają się w tym samym dniu wykładowym
          </p>
        </div>
        <div className="program-section">
          <h2>wykłady</h2>
          <p>
            <bold>Prowadzący:</bold>
            <br />
            <bold>Czas trwania:</bold> 90 minut
            <br />
            <bold>Dzień tygodniach:</bold> sobota
            <br />
            <bold>Ilość zajęć:</bold> 2 razy w roku szkolnym
          </p>
        </div>
        <div className="program-section">
          <h2>wykłady</h2>
          <p>
            <bold>Prowadzący:</bold> dr hab. Bogusław Praszke
            <br />
            <bold>Czas trwania:</bold> do uzgodnienia
            <br />
            <bold>Dzień tygodniach:</bold> do uzgodnienia
            <br />
            <bold>Ilość zajęć:</bold> 2 razy w roku szkolnym
          </p>
        </div>
      </div>
      <div className="program-desktop">
        <h2 className="about--header header">program</h2>
        <table>
          <tbody>
            <tr className="table-headers">
              <td>rodzaj zajęć</td>
              <td>prowadzący </td>
              <td>czas trwania</td>
              <td>dzień tygodnia</td>
              <td>ilość zajęć</td>
            </tr>
            <tr>
              <td className="table-left">zajęcia podstawowe</td>
              <td>Ignacy Rejmak</td>
              <td>90 minut</td>
              <td className="table-small">
                poniedziałek (17:30 - 19:15)
                <br />
                czwartek (18:00 - 19:30)
              </td>
              <td>raz w tygodniu</td>
            </tr>
            <tr>
              <td className="table-left">zajęcia dodatkowe</td>
              <td>dr hab. Bogusław Pranszke</td>
              <td>120 minut</td>
              <td>sobota</td>
              <td className="table-small">
                cztery razy w roku szkolnym zajęcia odbywają się w tym samym
                dniu wykładowym
              </td>
            </tr>
            <tr>
              <td className="table-left">wykłady</td>
              <td>dr hab. Bogusław Pranszke</td>
              <td>90 minut</td>
              <td>sobota</td>
              <td className="table-small">
                cztery razy w roku szkolnym zajęcia odbywają się w tym samym
                dniu wykładowym
              </td>
            </tr>
            <tr>
              <td className="table-left">wykłady</td>
              <td>-</td>
              <td>90 minut</td>
              <td>sobota</td>
              <td>dwa razy w roku szkolnym</td>
            </tr>
            <tr>
              <td className="table-left">wyjazdy na UM</td>
              <td>dr hab. Bogusław Pranszke</td>
              <td>do uzgodnienia</td>
              <td>do uzgodnienia</td>
              <td>dwa razy w roku szkolnym</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="participation">
        <h2 className="about--header header">UCZESTNICTWO</h2>
        <p>
          Zapraszamy za zajęcia pozalekcyjne z fizyki dla uczniów po VI klasie
          szkoły podstawowej.
          <br />
          <br />
          Zajęcia odbywają się w dwóch grupach:
          <ul>
            <li>
              Grupa I - uczniowie klas VII-VIII szkół podstawowych
              (poniedziałek)
            </li>
            <li>Grupa II – uczniowie szkół ponadpodstawowych (czwartek)</li>
            <li>Grupa – maksymalnie 10 osób</li>
          </ul>
          Zajęcia rozpoczynają się ****** r.
          <br />
          <bold>Koszt zajęć: 300 zł miesięcznie.</bold>
        </p>
      </div>
    </>
  );
};

export default PhysicsContent;
