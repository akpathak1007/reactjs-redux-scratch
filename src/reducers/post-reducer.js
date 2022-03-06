import * as actions from "../actions/post-actions";

const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_POSTS: {
      return { ...state, loading: true };
    }
    case actions.GET_POSTS_SUCCESS: {
      console.log(action);
      return { ...state, posts:action.payload, loading: false, hasErrors: false };
    }
    case actions.GET_POSTS_FAILURE: {
      return { ...state, laading: false, hasErrors: true };
    }
    default: {
      return state;
    }
  }
};

export default postReducer;
