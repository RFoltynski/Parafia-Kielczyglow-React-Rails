import React from "react";
import { useSpring, animated } from "react-spring";
import franciszek from "./../img/parafia/Opatronie/franciszek.jpg";
import franciszekM from "./../img/parafia/Opatronie/franciszek-mlody.jpg";
import franciszekP from "./../img/parafia/Opatronie/franciszek-prosto.jpg";

function OPatronie() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    leave: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="parafia-row">
      <animated.div style={props}>
        <div className="buttons-box">
          <h2>
            Św. Antoni z Padwy
            <br />
          </h2>
          <br />
          <div className="parafia-row">
            <div className="buttons-box-text col-md-8">
              <h3 className="h3-header">Podstawowe informacje o św. Antonim</h3>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Według
              podania, jego rodzicami byli Maria i Marcin Boglioni. Pomiędzy 15.
              a 20. rokiem życia wstąpił do Kanoników Regularnych Św. Augustyna,
              którzy mieli swój klasztor na przedmieściu Lizbony. Był tam dwa
              lata, po czym przeniósł się do klasztoru w Coimbrze, które to
              miasto - obok Lizbony - było głównym ośrodkiem życia religijnego i
              kulturalnego kraju. W roku 1219 otrzymał święcenia kapłańskie.
            </div>
            <img className="buttons-img col-md-4" src={franciszekP} />
          </div>
          <br />
          <div className="parafia-row">
            <img className="buttons-img col-md-4" src={franciszekM} />
            <div className="buttons-box-text col-md-8">
              <h3 className="h3-header">Życie św. Antoniego</h3>
              Św. Antoni, zapalony duchem męczeńskiej ofiary, postanowił udać
              się do Afryki, by w Maroku oddać swoje życie za Chrystusa. Jednak
              plany Boże były inne. Święty ciężko zachorował i musiał wracać do
              ojczyzny. Zastała go jednak na Morzu Śródziemnym burza i zapędziła
              jego statek na Sycylię. Właśnie w roku 1221 odbywała się w Asyżu
              kapituła generalna nowego zakonu. Święty udał się tam i spotkał ze
              Św. Franciszkiem. Po skończonej kapitule oddał się pod władzę
              brata Gracjana, prowincjała Emilii i Romanii, który wyznaczył mu
              pustelnię w Montepaolo w pobliżu Forli we Włoszech. Czas
              wykorzystał na pogłębienie w sobie życia wewnętrznego i dla swoich
              studiów. Ze szczególnym zamiłowaniem zagłębiał się w Pismo Święte,
              z którego później tak pełną dłonią korzystał. Równocześnie
              udzielał się na niwie duszpasterskiej i kaznodziejskiej.
            </div>
          </div>
          <br />
          <div className="parafia-row-column text-center">
            <h3 className="h3-header">Modlitwa Świętego Antoniego:</h3>

            <div className="parafia-row">
              <blockquote>
                Ufny w Twoją świętą przyczynę i przemożne zasługi polecam się
                Tobie, św. Antoni, i proszę Cię, wejrzyj na moją wierną i
                szczerą miłość i silną ufność, jaką serce moje względem Ciebie
                jest przepełnione. Zapisz sobie moje imię głęboko w Twym sercu i
                pozwól mi należeć do liczby tych, których Ty szczególnie
                miłujesz i ochraniasz, iżbym mógł we wszystkich moich potrzebach
                znajdować w Tobie ucieczkę. Amen.
              </blockquote>
              <img
                className="buttons-img col-md-4"
                src={franciszek}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              />
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default OPatronie;
