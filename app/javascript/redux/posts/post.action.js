import axios from "axios";

export const fetchPosts = () => {
  return async (dispatch) => {
    const url = `api/v1/posts?per_page=2&page=1`;
    const response = await axios.get(
      url,
      {},
      { "Content-Type": "application/json" }
    );

    dispatch({
      type: "FETCH_POSTS",
      payload: response.data.data,
    });
  };
};
