import axios from "axios";

export const fetchIntentions = () => {
  return async (dispatch) => {
    const url = "api/v1/intentions.json";
    const response = await axios.get(
      url,
      {},
      { "Content-Type": "application/json" }
    );
    dispatch({
      type: "FETCH_INTENTIONS",
      payload: response.data,
    });
  };
};
