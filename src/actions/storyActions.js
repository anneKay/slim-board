import actionTypes from '../utils/actionTypes';
import fetchData from '../utils/apiUtil';
import { prepareQuery } from '../utils/helper';
import cookieStore from '../utils/cookie';
import CookieUtil from '../utils/cookie';

/**
 * @description Dispatch an action to update the store on
 * successful fetch of all stories
 */
export const setGetStoriesSuccess = payload => ({
  type: actionTypes.GET_STORIES_SUCCESS,
  payload,
});

/**
 * @description Dispatch an action to update the store on
 * successful user login
 */
export const setGetStoriesFailure = payload => ({
  type: actionTypes.GET_STORIES_FAILURE,
  payload,
});

/**
 * @description Dispatch an action to update the store on
 * successful story creation
 */
export const setCreateStorySuccess = payload => ({
  type: actionTypes.CREATE_STORY_SUCCESS,
  payload,
});

/**
 * @description Dispatch an action to update the store on
 * successful user signup
 */
export const setCreateStoryFailure = payload => ({
  type: actionTypes.CREATE_STORY_FAILURE,
  payload,
});

/**
 * @description Makes API call to create a new ticket
 * @returns {Object} - story details
 */
export const createStory = (history, payload) => async dispatch => {
  console.log(payload, '>>>>>>>>>.');
  // try {
  //   const result = await fetchData(prepareQuery('api/createStory', payload), 'POST');
  //   if (result.status === 200 && result.data) {
  //     dispatch(setCreateStorySuccess(result.data));
  //     history.push('/');
  //     return result.data;
  //   }
  // } catch (error) {
  //   dispatch(setCreateStoryFailure(error));
  // }
};

/**
 * @description Makes API call to get all stories
 * @returns {Object} - story details
 */
export const fetchStories = history => async dispatch => {
  try {
    const result = await fetchData(prepareQuery('api/getStories'));
    if (result.status === 200 && result.data) {
      dispatch(setGetStoriesSuccess(result.data));
      history.push('/');
      return result.data;
    }
  } catch (error) {
    dispatch(setGetStoriesFailure(error));
  }
};
