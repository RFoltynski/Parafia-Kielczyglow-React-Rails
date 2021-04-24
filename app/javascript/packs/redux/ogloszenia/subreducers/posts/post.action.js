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
      payload: response.data,
    });
  };
};

export const fetchNewPosts = (per, page) => {
  const url = `api/v1/posts?per_page=${per}&page=${page}`;

  return async (dispatch) => {
    const response = await axios.get(
      url,
      {},
      { "Content-Type": "application/json" }
    );

    dispatch({
      type: "FETCH_NEW_POSTS",
      payload: response.data,
    });
  };
};

export const updatePostsPage = (payload) => {
  return {
    type: "UPDATE_POST_PAGE",
    payload: payload,
  };
};

export const setError = (message) => {
  return {
    type: "SET_ERROR",
    payload: message,
  };
};
