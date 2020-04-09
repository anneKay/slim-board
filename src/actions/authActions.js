import actionTypes from '../utils/actionTypes';
import fetchData from '../utils/apiUtil';
import { prepareQuery } from '../utils/helper';
import cookieStore from '../utils/cookie';
import CookieUtil from '../utils/cookie';

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
  type: actionTypes.SIGNUP_FAILURE,
  payload,
});

/**
 * @description Makes API call to log a user into the app
 * @returns {Object} - user details
 */
export const loginUser = (history, payload) => async dispatch => {
  console.log(payload);
  // try {
  //   const isAdmin = CookieUtil.getItem('isAdminUser');
  //   const url = isAdmin === 'true' ? 'admin-login' : 'login';
  //   const result = await fetchData(prepareQuery(`api/${url}`, payload), 'POST');
  //   if (result.status === 200 && result.data) {
  //     cookieStore.setItem('userData', JSON.stringify(result.data), 30);
  //     dispatch(setUserLoginSuccess(result.data));
  //     history.push('/');
  //     return result.data;
  //   }
  // } catch (error) {
  //   dispatch(setUserLoginFailure(error));
  // }
};

/**
 * @description Makes API call to log a user into the app
 * @returns {Object} - user details
 */
export const SignupUser = (history, payload) => async dispatch => {
  try {
    const result = await fetchData(prepareQuery('api/signup', payload), 'POST');
    if (result.status === 200 && result.data) {
      cookieStore.setItem('userData', result.data, 30);
      dispatch(setUserSignupSuccess(result.data));
      history.push('/dashboard');
      return result.data;
    }
  } catch (error) {
    dispatch(setUserSignupFailure(error));
  }
};
