import 'babel-polyfill';
import { get, post } from 'axios';
import BASE_URL from './index';
import {
  FETCH_TAGS,
  FETCH_TAGS_ERROR,
  CREATE_ARTICLE,
  CREATE_ARTICLE_ERROR,
  CLEAR_ARTICLE_ERROR,
  PUBLISHING_ARTICLE,
  GOT_ARTICLE,
  ERROR_GETTING_ARTICLE,
  GETTING_ARTICLE
} from '../actionTypes';

/**
 * @method fetchTags
 * @description - Method to dispatch fetch tags actions
 * @returns {object} - The fetch tags action object
 */
const fetchTagsAction = async () => {
  try {
    const response = await get(`${BASE_URL}/articles/tags`);
    const { tags } = response.data;
    return {
      type: FETCH_TAGS,
      payload: tags
    };
  } catch (error) {
    return {
      type: FETCH_TAGS_ERROR,
      payload: error.response.data
    };
  }
};

/**
 * @method createArticleAction
 * @description - Method to dispatch create article actions
 * @param {object} articleDetails - The form details stored in state
 * @returns {object} - The create article action object
 */
const createArticleAction = async (articleDetails) => {
  try {
    const request = await post(`${BASE_URL}/articles`, articleDetails, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authorsHavenToken') || sessionStorage.getItem('authorsHavenToken')}`
      }
    });

    const createdArticle = request.data;

    return {
      type: CREATE_ARTICLE,
      payload: createdArticle
    };
  } catch (error) {
    const errorResponse = { status: '5XX' };
    const obj = {
      type: CREATE_ARTICLE_ERROR,
      payload: error.response.data ? error.response.data.errors : errorResponse
    };
    return obj;
  }
};

/**
 * @description function for clearing create article errors
 * @returns {object} action
 */
const clearErrorsAction = () => ({ type: CLEAR_ARTICLE_ERROR });

/**
 * @description function for displaying publishing state
 * @returns {object} action
 */
const publishingArticleAction = () => ({ type: PUBLISHING_ARTICLE });

/**
 * @method getArticleAction
 * @param {string} articleSlug - The slug of the article to get
 * @param {string} token - The user's token
 * @description - Method to dispatch get article actions
 * @returns {object} - The got article action object
 */
const getArticleAction = async (articleSlug, token) => {
  const requestOptions = {};
  if (token) {
    requestOptions.headers = {
      Authorization: `Bearer ${token}`
    };
  }
  try {
    const request = await get(`${BASE_URL}/articles/${articleSlug}`, requestOptions);
    const gottenArticle = request.data;

    return {
      type: GOT_ARTICLE,
      payload: gottenArticle
    };
  } catch (error) {
    const networkErrorResponse = { message: 'Can\'t get Article right now, please try again later' };
    return {
      type: ERROR_GETTING_ARTICLE,
      payload: error.response ? error.response.data : networkErrorResponse
    };
  }
};

/**
 * @description function for displaying loading state
 * @returns {object} action
 */
const gettingArticleAction = () => ({ type: GETTING_ARTICLE });

export {
  fetchTagsAction,
  createArticleAction,
  clearErrorsAction,
  publishingArticleAction,
  getArticleAction,
  gettingArticleAction
};
