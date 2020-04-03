import actionTypes from '../utils/actionTypes';
import fetchData from '../utils/apiUtil';
import { prepareQuery } from '../utils/helper';

/**
 * @description Dispatch an action to update the store on
 * successful user login
 */
export const setUserLoginSuccess = payload => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload,
});

/**
 * @description Dispatch an action to update the store on
 * successful user login
 */
export const setUserLoginFailure = payload => ({
  type: actionTypes.LOGIN_FAILURE,
  payload,
});

/**
 * @description Dispatch an action to update the store on
 * successful user signup
 */
export const setUserSignupSuccess = payload => ({
  type: actionTypes.SIGNUP_SUCCESS,
  payload,
});

/**
 * @description Dispatch an action to update the store on
 * successful user signup
 */
export const setUserSignupFailure = payload => ({
  type: actionTypes.Signup_FAILURE,
  payload,
});

/**
 * @description Makes API call to log a user into the app
 * @returns {Object} - user details
 */
export const loginUser = history => async dispatch => {
  try {
    const result = await fetchData(prepareQuery(authUrl, payload));
    if (result.status === 200 && result.data) {
      cookieStore.setItem('userData', result.data, 30);
      dispatch(setUserLoginSuccess(result.data));
      history.push('/dashboard');
      return result.data;
    }
  } catch (error) {
    dispatch(setSmTokenFailure(error));
  }
};

/**
 * @description Makes API call to log a user into the app
 * @returns {Object} - user details
 */
export const SignupUser = history => async dispatch => {
  try {
    const result = await fetchData(prepareQuery(authUrl, payload));
    if (result.status === 200 && result.data) {
      // surveyMonkeyToken = await result.data;
      cookieStore.setItem('userData', result.data, 30);
      dispatch(setUserLoginSuccess(result.data));
      history.push('/dashboard');
      return result.data;
    }
  } catch (error) {
    dispatch(setSmTokenFailure(error));
  }
};
