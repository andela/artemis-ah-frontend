import {
  CREATE_ARTICLE,
  CREATE_ARTICLE_ERROR,
  CLEAR_ARTICLE_ERROR,
  PUBLISHING_ARTICLE,
  SAVE_EDITED_ARTICLE,
  EDIT_ARTICLE,
  OPEN_DELETE_CONFIRMATION_MODAL,
  CLOSE_DELETE_CONFIRMATION_MODAL,
  GET_ARTICLES,
  GET_ARTICLES_ERROR,
  GETTING_ARTICLE,
  GOT_ARTICLE,
  ERROR_GETTING_ARTICLE,
  BOOKMARK_LOADING,
  DELETED_BOOKMARK,
  ERROR_GETTING_BOOKMARKS,
  ERROR_DELETING_BOOKMARKS,
  GOT_BOOKMARKS
} from '../actionTypes';

export const initialState = {
  articleData: {},
  articles: [],
  totalNumberOfArticles: 0,
  limit: 0,
  loading: true,
  errors: {},
  isPublishing: false,
  articleCardData: JSON.parse(localStorage.getItem('cardData')) || {},
  confirmationModal: false,
  updatedArticle: {},
  isGetting: false,
  articleGotten: {},
  newArticleSlug: '',
  bookmarkedArticles: [],
  bookmarkDeleted: {}
};

/**
 * @param {object} state - The initial state
 * @param {object} {*} - destructured type object
 * @returns {object} - The transformed state
 */
const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: payload.articles,
        totalNumberOfArticles: payload.total,
        limit: payload.limit,
        loading: false
      };
    case GET_ARTICLES_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false
      };
    case CREATE_ARTICLE:
      return {
        ...state,
        isPublishing: false,
        newArticleSlug: payload.article.slug,
        articleData: payload.article
      };
    case CREATE_ARTICLE_ERROR:
      return {
        ...state,
        isPublishing: false,
        errors: payload
      };
    case CLEAR_ARTICLE_ERROR:
      return {
        ...state,
        isPublishing: false,
        isGetting: false,
        newArticleSlug: '',
        errors: {},
        bookmarkDeleted: {}
      };
    case PUBLISHING_ARTICLE:
      return {
        ...state,
        isPublishing: true
      };
    case EDIT_ARTICLE:
      return {
        ...state,
        articleCardData: payload
      };
    case SAVE_EDITED_ARTICLE:
      return {
        ...state,
        isPublishing: false,
        updatedArticle: payload
      };
    case OPEN_DELETE_CONFIRMATION_MODAL:
      return {
        ...state,
        confirmationModal: true
      };
    case CLOSE_DELETE_CONFIRMATION_MODAL:
      return {
        ...state,
        confirmationModal: false
      };
    case GETTING_ARTICLE:
      return {
        ...state,
        isGetting: true,
        errors: {}
      };
    // eslint-disable-next-line no-case-declarations
    case GOT_ARTICLE:
      const { article, clap } = payload;
      return {
        ...state,
        isGetting: false,
        articleGotten: { ...article, clap },
        errors: {}
      };
    case ERROR_GETTING_ARTICLE:
      return {
        ...state,
        isGetting: false,
        articleDetailsGotten: {},
        errors: payload
      };
    case ERROR_DELETING_BOOKMARKS:
      return {
        ...state,
        errors: payload,
        bookmarkDeleted: {},
        loading: false
      };
    case ERROR_GETTING_BOOKMARKS:
      return {
        ...state,
        errors: payload,
        loading: false
      };
    case GOT_BOOKMARKS:
      return {
        ...state,
        errors: {},
        bookmarkedArticles: payload,
        loading: false
      };
    case DELETED_BOOKMARK:
      return {
        ...state,
        errors: {},
        bookmarkDeleted: payload,
        loading: false,
        bookmarkedArticles: state.bookmarkedArticles.filter(a => a.slug !== payload.slug)
      };
    case BOOKMARK_LOADING:
      return {
        ...state,
        errors: {},
        loading: true,
        deletedBookmark: {}
      };
    default:
      return state;
  }
};

export default articleReducer;
