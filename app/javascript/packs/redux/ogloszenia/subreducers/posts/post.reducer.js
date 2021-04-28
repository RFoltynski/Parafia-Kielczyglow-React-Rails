const INITIAL_STATE = {
  mainHeader: "Aktualności",
  content: {
    ogloszenia: {
      component: "NewsComponent",
    },
  },
  fetchPosts: ["no posts yet"],
  per: 2,
  totalPages: null,
  page: 1,
  pageLoadError: null,
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        fetchPosts: action.payload.data,
        totalPages: action.payload.pages,
        page: action.payload.page,
      };
    case "UPDATE_POST_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "FETCH_NEW_POSTS":
      return {
        ...state,
        fetchPosts: [...state.fetchPosts, ...action.payload.data],
        totalPages: action.payload.pages,
      };
    case "SET_ERROR":
      return {
        ...state,
        pageLoadError: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
