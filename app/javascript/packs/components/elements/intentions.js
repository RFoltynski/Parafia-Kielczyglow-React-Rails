import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchIntentions } from "./../../redux/ogloszenia/subreducers/intentions/intentions.action";

const Intentions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIntentions());
  }, []);

  const intentionFile = useSelector(
    (state) => state.ogloszenia.intentions.intention
  );

  return (
    <>
      <a href={intentionFile.file}>Pobierz intencje z tygodnia:</a>
      <br />

      <button className="button-inside-box">Skpiuj link</button>
      <button className="button-inside-box" target={"_blank"}>
        Otworz w nowej karcie
      </button>
      <button className="button-inside-box">Pobierz</button>
    </>
  );
};

export default Intentions;
