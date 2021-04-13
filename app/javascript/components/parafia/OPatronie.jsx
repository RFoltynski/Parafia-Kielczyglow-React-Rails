import React from "react";
import franciszek from "./../img/parafia/Opatronie/franciszek.jpg";
import franciszekM from "./../img/parafia/Opatronie/franciszek-mlody.jpg";
import franciszekP from "./../img/parafia/Opatronie/franciszek-prosto.jpg";

function OPatronie() {
  return (
    <div className="subcategory__container">
      <div className="subcategory__view">
        <h2>Św. Antoni Padewski</h2>
        <div className="subcategory__view__column">
          <section className={"section"}>
            <img
              src={franciszek}
              alt="sw.franciszek"
              className="sections_image"
            />
            <div className="section_text">
              <h4 className="section_text_header">Życie</h4>
              <p className="section_text_content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis distinctio quibusdam culpa accusamus error
                repudiandae totam labore, perferendis beatae, possimus neque!
                Sequi rem porro natus harum eum officiis tempora ut!
              </p>
            </div>
          </section>
          <section className={"section"}>
            <img
              src={franciszekM}
              alt="sw.franciszek"
              className="sections_image"
            />
          </section>
          <section className={"section"}>
            <img
              src={franciszekP}
              alt="sw.franciszek"
              className="sections_image"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default OPatronie;
