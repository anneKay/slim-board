import action from '../utils/actionTypes';

const initialState = {
  data: {},
  message: {},
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case action.LOGIN_SUCCESS:
      return {
        ...state,
        data: payload,
        error: false,
      };
    case action.LOGIN_FAILED:
      return {
        ...state,
        error: true,
        message: payload,
      };
    case action.SIGNUP_SUCCESS:
      return {
        ...state,
        error: false,
        message: payload,
      };
    case action.LOGIN_FAILURE:
      return {
        ...state,
        error: true,
        message: payload,
      };
    default:
      return state;
  }
};
