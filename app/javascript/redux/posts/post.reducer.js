const INITIAL_STATE = {
  fetch_posts: "no posts yet",
};

const postReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "FETCH_POSTS":
      console.log(action.payload);
      return {
        ...state,
        fetch_posts: [action.payload],
      };
    default:
      return state;
  }
};

export default postReducer;
