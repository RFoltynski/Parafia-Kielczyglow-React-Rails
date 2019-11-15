import React from "react";
import { useSpring, animated } from "react-spring";
import dzieci from "./../img/ksiazki/dzieci.jpg";
import dzikie from "./../img/ksiazki/dzikieserce.jpg";
import listy from "./../img/ksiazki/listy.jpg";
import pismoswiete from "./../img/ksiazki/pismoswiete.jpg";
import urzekajaca from "./../img/ksiazki/urzekajaca.jpg";
import o from "./../img/ksiazki/o.jpg";

function Ksiazki() {
  const props = useSpring({
    to: { opacity: 1, width: "100%" },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="inne-row">
      <animated.div style={props}>
        <div className="buttons-box">
          <h2 name="scroll-to-historia">Książki, które warto przeczytać</h2>
          <br />

          <div className="parafia-row">
            <img className="buttons-img col-md-3" src={pismoswiete} />
            <div className="buttons-box-text col-md-7 text-center">
              <h3 className="h3-header">Pismo Święte</h3>
              "Biblia Tysiąclecia to najpopularniejsze narodowe wydanie Pisma
              Świętego. Zawiera jedyny polski tekst Pisma Świętego, zatwierdzony
              do stosowania w liturgii przez Konferencję Episkopatu Polski,
              przystępne komentarze - przypisy, mapy oraz podręczny słownik
              biblijny. Biblia - "Księga Życia" - Verba Sacra - jest bez
              wątpienia najwspanialszym z dzieł w historii świata, bestsellerem
              wszechczasów."
              <br />
              <br />
              <a
                href="https://lubimyczytac.pl/ksiazka/4803408/pismo-swiete-starego-i-nowego-testamentu-biblia-tysiaclecia"
                target="_blank"
              >
                {" "}
                Źródło: Lubimy Czytać
              </a>
            </div>
          </div>
          <br />
          <div className="parafia-row">
            <img className="buttons-img col-md-3" src={o} />
            <div className="buttons-box-text col-md-7  text-center">
              <h3 className="h3-header "> O naśladowaniu Chrystusa </h3>
              <p>Tomasz z Kempis</p>
              "O naśladowaniu... stało się jednym z najbardziej
              rozpowszechnionych (po Biblii) ksiąg chrześcijańskich. Popularność
              zdobyła nie tylko wśród katolików, ale również wśród protestantów,
              a nawet niechrześcijan. Forma dialogu ucznia z niewidzialnym
              Mistrzem, która często pojawia się na kartach książki nadaje
              niezwykłego charakteru tej książce. O naśladowaniu... to książka
              szczególna, mówi wprost jak godnie i prawdziwie żyć. Wśród jej
              czytelników można znaleźć wielu świętych, błogosławionych,
              mistyków, znanych pisarzy i poetów. "
              <br />
              <br />
              <a
                href="http://lubimyczytac.pl/ksiazka/241356/o-nasladowaniu-chrystusa"
                target="_blank"
              >
                {" "}
                Źródło: Lubimy Czytać
              </a>
            </div>
          </div>
          <br />
          <div className="parafia-row">
            <img
              className="buttons-img buttons-img-miejsca col-md-3"
              src={dzikie}
            />
            <div className="buttons-box-text  col-md-7  text-center">
              <h3 className="h3-header ">
                {" "}
                Dzikie serce. Tęsknoty męskiej duszy
              </h3>
              <p>John Eldredge</p>
              "John Eldredge twierdzi, iż to, co naprawdę definiuje istotę
              męskości, zostało całkowicie stracone dla naszego myślenia.
              Tymczasem warunkiem uchwycenia tego, co konstytuuje mężczyznę,
              jest zrozumienie trzech fundamentalnych pragnień, kryjących się
              głęboko w jego sercu: pragnienia stoczenia bitwy, przeżycia
              przygody i uratowania damy w nieszczęściu."
              <br />
              <br />
              <a
                href="http://lubimyczytac.pl/ksiazka/195154/dzikie-serce-tesknoty-meskiej-duszy"
                target="_blank"
              >
                {" "}
                Źródło: Lubimy Czytać
              </a>
            </div>
          </div>
          <br />
          <div className="parafia-row">
            <img className="buttons-img col-md-3" src={urzekajaca} />
            <div className="buttons-box-text col-md-7 text-center">
              <h3 className="h3-header ">
                Urzekająca. Odkrywanie tajemnicy kobiecej duszy
              </h3>
              <p> John Eldredge, Stasi Eldredge </p>
              "Każda kobieta tęskni, by być kochaną, by odegrać niezastąpioną
              rolę w wielkiej przygodzie, oraz by posiadać własne piękno do
              odsłonięcia. Przypatrz się swoim ulubionym filmom. Przypomnij
              sobie zabawy z czasów, gdy byłaś małą dziewczynką. Te pragnienia
              tkwiące w twoim sercu pochodzą od Boga i stanowią część Jego
              zamysłu wobec Ewy."
              <br />
              <br />
              <a
                href="http://lubimyczytac.pl/ksiazka/49966/urzekajaca-odkrywanie-tajemnicy-kobiecej-duszy"
                target="_blank"
              >
                {" "}
                Źródło: Lubimy Czytać
              </a>
            </div>
          </div>
          <div className="parafia-row">
            <img className="buttons-img col-md-3" src={listy} />
            <div className="buttons-box-text col-md-7  text-center">
              <h3 className="h3-header">Listy starego diabła do młodego</h3>
              <p> Clive Staples Lewis </p>
              "Na kartkach tej błyskotliwej, przewrotnej książki poznajemy
              zagrożenia, na jakie może być narażony człowiek, który chce żyć
              dobrze i sprawiedliwie. Mimo że mija właśnie siedemdziesiąt lat od
              pierwszego angielskiego wydania Listów starego diabła do młodego,
              książka nie zestarzała się ani trochę. Temat niestety jest ciągle
              aktualny…"
              <br />
              <br />
              <a
                href="http://lubimyczytac.pl/ksiazka/151625/listy-starego-diabla-do-mlodego"
                target="_blank"
              >
                {" "}
                Źródło: Lubimy Czytać
              </a>
            </div>
          </div>
          <div className="parafia-row">
            <img className="buttons-img col-md-3" src={dzieci} />
            <div className="buttons-box-text col-md-7  text-center">
              <h3 className="h3-header">Dorosłe dzieci alkoholików</h3>
              <p> Janet G. Woititz </p>
              "Jeśli jesteś dzieckiem alkoholika, książka ta powinna pomóc
              lepiej zrozumieć co się z tobą obecnie dzieje i jak do tego
              doszło. Zrozumienie tego faktu może pomóc zmniejszyć poczucie
              izolacji u osób, które uważają się za 'inne' z powodu swego
              życiowego doświadczenia."
              <br />
              <br />
              <a
                href="http://lubimyczytac.pl/ksiazka/127028/dorosle-dzieci-alkoholikow"
                target="_blank"
              >
                {" "}
                Źródło: Lubimy Czytać
              </a>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Ksiazki;
