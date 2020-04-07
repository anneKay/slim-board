import action from '../utils/actionTypes';

const initialState = {
  data: {},
  message: {},
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case action.GET_STORIES_SUCCESS:
      return {
        ...state,
        data: payload,
        error: false,
      };
    case action.GET_STORIES_FAILURE:
      return {
        ...state,
        error: true,
        message: payload,
      };
    case action.CREATE_STORY_SUCCESS:
      return {
        ...state,
        error: false,
        message: payload,
      };
    case action.CREATE_STORY_FAILURE:
      return {
        ...state,
        error: true,
        message: payload,
      };
    default:
      return state;
  }
};
