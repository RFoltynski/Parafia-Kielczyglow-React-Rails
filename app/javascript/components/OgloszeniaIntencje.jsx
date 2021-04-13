import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIntentions } from "../redux/intentions/intentions.action";

const OgloszeniaIntencje = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIntentions());
  }, []);

  const intentionFile = useSelector((state) => state.intentions.file);

  return (
    <div className="subcategory__view">
      {" "}
      <h2>Intencje mszy świętych</h2>
      <div className="subcategory__view__column">
        <a href={intentionFile} target="_blank">
          Pobierz intencje z tygodnia:
        </a>
        <br />

        <button className="button-inside-box">Skpiuj link</button>
        <button className="button-inside-box">Otworz w nowej karcie</button>
        <button className="button-inside-box">Pobierz</button>
      </div>
    </div>
  );
};

export default OgloszeniaIntencje;
