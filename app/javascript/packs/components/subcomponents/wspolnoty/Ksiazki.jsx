import React from "react";
import dzieci from "./../../img/ksiazki/dzieci.jpg";
import dzikie from "./../../img/ksiazki/dzikieserce.jpg";
import listy from "./../../img/ksiazki/listy.jpg";
import o from "./../../img/ksiazki/o.jpg";
import oskar from "./../../img/ksiazki/oskar.jpg";
import pismoswiete from "./../../img/ksiazki/pismoswiete.jpg";
import urzekajaca from "./../../img/ksiazki/urzekajaca.jpg";

function Ksiazki() {
  return (
    <div className="subcategory__container">
      <div className="subcategory__view">
        <h2>Książki, które warto przeczytać</h2>
        <br />

        <div className="subcategory__view__column">
          <img className="buttons-img col-md-3" src={pismoswiete} />
          <div className="buttons-box-text col-md-7 text-center">
            <h3 className="h3-header">Pismo Święte</h3>
            "Biblia Tysiąclecia to najpopularniejsze narodowe wydanie Pisma
            Świętego. Zawiera jedyny polski tekst Pisma Świętego, zatwierdzony
            do stosowania w liturgii przez Konferencję Episkopatu Polski,
            przystępne komentarze - przypisy, mapy oraz podręczny słownik
            biblijny. Biblia - "Księga Życia" - Verba Sacra - jest bez wątpienia
            najwspanialszym z dzieł w historii świata, bestsellerem
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
        <div className="subcategory__view__column">
          <img className="buttons-img col-md-3" src={o} />
          <div className="buttons-box-text col-md-7  text-center">
            <h3 className="h3-header "> O naśladowaniu Chrystusa </h3>
            <p>Tomasz z Kempis</p>
            "O naśladowaniu Chrystusa to książka szczególna, mówi wprost jak
            godnie i prawdziwie żyć. Wśród jej czytelników można znaleźć wielu
            świętych, błogosławionych, mistyków, znanych pisarzy i poetów. "
            <br />
            <br />
            Cytat z książki:
            <blockquote>
              Lepiej jest odczuwać skruchę, aniżeli poznać jej definicję. Nawet
              gdybyś się nauczył na pamięć całej Biblii i wszystkiego, co
              powiedzieli filozofowie, cóż ci to pomoże, jeśli ci zabraknie
              miłości i łaski?
            </blockquote>
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
        <div className="subcategory__view__column">
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
            "Warunkiem uchwycenia tego, co konstytuuje mężczyznę, jest
            zrozumienie trzech fundamentalnych pragnień, kryjących się głęboko w
            jego sercu: pragnienia stoczenia bitwy, przeżycia przygody i
            uratowania damy w nieszczęściu."
            <br />
            <br />
            Cytat z książki:
            <blockquote>
              Wolność jest bezużyteczna, jeśli nie ćwiczymy jej jako postacie
              podejmujące decyzje... Jesteśmy wolni, żeby zmieniać opowieści,
              które przeżywamy. Ponieważ jesteśmy postaciami autentycznymi, a
              nie zwykłymi marionetkami, możemy wybrać określające nas historie.
              Jesteśmy jednocześnie współautorami i postaciami. Niewiele rzeczy
              tak dodaje otuchy jak świadomość, że wszystko może wyglądać
              inaczej i że my mamy w tym swój udział.
            </blockquote>
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
        <div className="subcategory__view__column">
          <img className="buttons-img col-md-3" src={urzekajaca} />
          <div className="buttons-box-text col-md-7 text-center">
            <h3 className="h3-header ">
              Urzekająca. Odkrywanie tajemnicy kobiecej duszy
            </h3>
            <p> John Eldredge, Stasi Eldredge </p>
            "Każda kobieta tęskni, by być kochaną, by odegrać niezastąpioną rolę
            w wielkiej przygodzie, oraz by posiadać własne piękno do
            odsłonięcia. Przypatrz się swoim ulubionym filmom. Przypomnij sobie
            zabawy z czasów, gdy byłaś małą dziewczynką. Te pragnienia tkwiące w
            twoim sercu pochodzą od Boga i stanowią część Jego zamysłu wobec
            Ewy."
            <br />
            <br />
            Cytat z książki:
            <blockquote>
              Odnajdę Cię. Bez względu na to, jak długo to potrwa, bez względu
              na to jak daleko będziesz - odnajdę Cię.
            </blockquote>
            <a
              href="http://lubimyczytac.pl/ksiazka/49966/urzekajaca-odkrywanie-tajemnicy-kobiecej-duszy"
              target="_blank"
            >
              {" "}
              Źródło: Lubimy Czytać
            </a>
          </div>
        </div>
        <br />
        <div className="subcategory__view__column">
          <img className="buttons-img col-md-3" src={listy} />
          <div className="buttons-box-text col-md-7  text-center">
            <h3 className="h3-header">Listy starego diabła do młodego</h3>
            <p> Clive Staples Lewis </p>
            "Na kartkach tej błyskotliwej, przewrotnej książki poznajemy
            zagrożenia, na jakie może być narażony człowiek, który chce żyć
            dobrze i sprawiedliwie. Mimo że mija wiele lat od pierwszego
            angielskiego wydania Listów starego diabła do młodego, książka nie
            zestarzała się ani trochę. Temat niestety jest ciągle aktualny…"
            <br />
            <br />
            Cytat z książki:
            <blockquote>
              Wielcy (i apetyczni) grzesznicy są ulepieni z tego samego
              tworzywa, co te straszne kurioza - wielcy Święci.
            </blockquote>
            <a
              href="http://lubimyczytac.pl/ksiazka/151625/listy-starego-diabla-do-mlodego"
              target="_blank"
            >
              {" "}
              Źródło: Lubimy Czytać
            </a>
          </div>
        </div>
        <br />
        <div className="subcategory__view__column">
          <img className="buttons-img col-md-3" src={dzieci} />
          <div className="buttons-box-text col-md-7  text-center">
            <h3 className="h3-header">Dorosłe dzieci alkoholików</h3>
            <p> Janet G. Woititz </p>
            "Jeśli jesteś dzieckiem alkoholika, książka ta powinna pomóc lepiej
            zrozumieć co się z tobą obecnie dzieje i jak do tego doszło.
            Zrozumienie tego faktu może pomóc zmniejszyć poczucie izolacji u
            osób, które uważają się za 'inne' z powodu swego życiowego
            doświadczenia."
            <br />
            <br />
            Cytat z książki:
            <blockquote>
              Zrobiłem ten błąd, jednak JA błędem nie jestem.
            </blockquote>
            <a
              href="http://lubimyczytac.pl/ksiazka/127028/dorosle-dzieci-alkoholikow"
              target="_blank"
            >
              {" "}
              Źródło: Lubimy Czytać
            </a>
          </div>
        </div>
        <br />
        <div className="subcategory__view__column">
          <img className="buttons-img col-md-3" src={oskar} />
          <div className="buttons-box-text col-md-7  text-center">
            <h3 className="h3-header">Oskar i Pani Róża</h3>
            <p> Janet G. Woititz </p>
            "Czy w ciągu dwunastu dni można poznać smak życia i odkryć jego
            najgłębszy sens? Dziesięcioletni Oskar leży w szpitalu i nie wierzy
            już w żadne bajki. Na jego drodze staje tajemnicza pani Róża, która
            ma za sobą karierę zapaśniczki i potrafi znaleźć wyjście z każdej
            sytuacji…"
            <br />
            <br />
            Cytat z książki:
            <blockquote>
              Myśli, których się nie zdradza, ciążą nam, zagnieżdżają się,
              paraliżują nas, nie dopuszczają nowych i w końcu zaczynają gnić.
              Staniesz się składem starych śmierdzących myśli, jeśli ich nie
              wypowiesz.
            </blockquote>
            <a
              href="https://lubimyczytac.pl/ksiazka/4805264/oskar-i-pani-roza"
              target="_blank"
            >
              {" "}
              Źródło: Lubimy Czytać
            </a>
          </div>{" "}
        </div>
        <br />
      </div>
    </div>
  );
}

export default Ksiazki;
