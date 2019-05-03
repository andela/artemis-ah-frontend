export const CHANGE_NAME = 'CHANGE_NAME';

// Comment action types
export const GET_COMMENTS = 'GET_COMMENTS';
export const POST_COMMENT = 'POST_COMENTS';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const EDIT_COMMENT_ERROR = 'EDIT_COMMENT_ERROR';
export const POST_COMMENT_ERROR = 'POST_COMMENT_ERROR';
export const CLEAR_EDITED = 'CLEAR_EDITED';
export const GET_EDIT_COMMENT_HISTORY = 'GET_EDIT_COMMENT_HISTORY';
export const GET_COMMENT_EDIT_HISTORY_LOADING = 'GET_COMMENT_EDIT_HISTORY_LOADING';
export const EDIT_LOADING = 'EDIT_LOADING';
export const COMMENT_LOADING = 'COMMENT_LOADING';
export const CLEAR_POSTED = 'CLEAR_POSTED';
export const TOGGLE_COMMENT_LIKE = 'TOGGLE_COMMENT_LIKE';
export const TOGGLE_COMMENT_LIKE_SUCCESS = 'TOGGLE_COMMENT_LIKE_SUCCESS';
export const LIKE_COMMENT_ERROR = 'LIKE_COMMENT_ERROR';

// Get all articles Action types
export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_ARTICLES_ERROR = 'GET_ARTICLES_ERROR';
export const ARTICLES_LOADING = 'ARTICLES_LOADING';

// Auth Action types
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CLEAR_AUTH_ERROR = 'CLEAR_AUTH_ERROR';
export const AUTH_LOADING = 'AUTH_LOADING';
export const LOGOUT_USER = 'LOGOUT_USER';

// Profile action types
export const PROFILE_USER_DETAILS_FETCHED = 'PROFILE_USER_DETAILS_FETCHED';
export const PROFILE_USER_DETAILS_FETCH_ERROR = 'PROFILE_USER_DETAILS_FETCH_ERROR';

export const PROFILE_ARTICLES_FETCHING = 'PROFILE_ARTICLES_FETCHING';
export const PROFILE_ARTICLES_FETCHED = 'PROFILE_ARTICLES_FETCHED';
export const PROFILE_ARTICLES_FETCH_ERROR = 'PROFILE_ARTICLES_FETCH_ERROR';

export const PROFILE_FOLLOWERS_FETCHING = 'PROFILE_FOLLOWERS_FETCHING';
export const PROFILE_FOLLOWERS_FETCHED = 'PROFILE_FOLLOWERS_FETCHED';
export const PROFILE_FOLLOWERS_FETCH_ERROR = 'PROFILE_FOLLOWERS_FETCH_ERROR';

export const PROFILE_FOLLOWING_FETCHING = 'PROFILE_FOLLOWING_FETCHING';
export const PROFILE_FOLLOWING_FETCHED = 'PROFILE_FOLLOWING_FETCHED';
export const PROFILE_FOLLOWING_FETCH_ERROR = 'PROFILE_FOLLOWING_FETCH_ERROR';

export const PROFILE_DETAILS_UPDATING = 'PROFILE_DETAILS_UPDATING';
export const PROFILE_DETAILS_UPDATED = 'PROFILE_DETAILS_UPDATED';
export const PROFILE_DETAILS_UPDATE_ERROR = 'PROFILE_DETAILS_UPDATE_ERROR';

export const PROFILE_RESET_EDIT_STATE = 'PROFILE_RESET_EDIT_STATE';

export const PROFILE_RESET = 'PROFILE_RESET';

export const UPDATING_PROFILE = 'UPDATING PROFILE';
export const UPDATE_NOTIFICATION_SETTINGS = 'UPDATE_NOTIFICATION_SETTINGS';
export const ERROR_UPDATING_NOTIFICATION_SETTINGS = 'ERROR_UPDATING_NOTIFICATION_SETTINGS';

// Articles Action types
export const FETCH_TAGS = 'FETCH_TAGS';
export const FETCH_TAGS_ERROR = 'FETCH_TAGS_ERROR';
export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const CREATE_ARTICLE_ERROR = 'CREATE_ARTICLE_ERROR';
export const CLEAR_ARTICLE_ERROR = 'CLEAR_ARTICLE_ERROR';
export const PUBLISHING_ARTICLE = 'PUBLISHING_ARTICLE';
export const ARTICLE_BOOKMARK_ADDED = 'ARTICLE_BOOKMARK_ADDED';
export const ARTICLE_BOOKMARK_ADD_ERROR = 'ARTICLE_BOOKMARK_ADD_ERROR';
export const ARTICLE_BOOKMARK_REMOVED = 'ARTICLE_BOOKMARK_REMOVED';
export const ARTICLE_BOOKMARK_REMOVE_ERROR = 'ARTICLE_BOOKMARK_REMOVE_ERROR';
export const GETTING_ARTICLE = 'GETTING_ARTICLE';
export const GOT_ARTICLE = 'GOT_ARTICLE';
export const ERROR_GETTING_ARTICLE = 'ERROR_GETTING_ARTICLE';
export const ARTICLE_CLAP = 'ARTICLE_CLAP';
export const ARTICLE_CLAP_ERROR = 'ARTICLE_CLAP_ERROR';
export const BOOKMARK_LOADING = 'BOOKMARK_LOADING';
export const GOT_BOOKMARKS = 'GOT_BOOKMARKS';
export const ERROR_GETTING_BOOKMARKS = 'ERROR_GETTING_BOOKMARKS';
export const DELETED_BOOKMARK = 'DELETED_BOOKMARK';
export const ERROR_DELETING_BOOKMARKS = 'ERROR_DELETING_BOOKMARKS';

// Sign Up Action types
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

export const EDIT_ARTICLE = 'EDIT_ARTICLE';
export const SAVE_EDITED_ARTICLE = 'SAVE_EDITED_ARTICLE';

export const OPEN_DELETE_CONFIRMATION_MODAL = 'OPEN_DELETE_CONFIRMATION_MODAL';
export const CLOSE_DELETE_CONFIRMATION_MODAL = 'CLOSE_DELETE_CONFIRMATION_MODAL';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';

export const FETCH_DELETE_ERROR = 'FETCH_DELETE_ERROR';

// fetch notifications
export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS';

// Action types to follow/unfollow user
export const FOLLOW_ACTION_FOLLOWING_IN_PROGRESS = 'FOLLOW_ACTION_FOLLOWING_IN_PROGRESS';
export const FOLLOW_ACTION_UNFOLLOWING_IN_PROGRESS = 'FOLLOW_ACTION_UNFOLLOWING_IN_PROGRESS';

export const FOLLOW_ACTION_FOLLOWED = 'FOLLOW_ACTION_FOLLOWED';
export const FOLLOW_ACTION_UNFOLLOWED = 'FOLLOW_ACTION_UNFOLLOWED';

export const FOLLOW_ACTION_FOLLOW_FAILED = 'FOLLOW_ACTION_FOLLOW_FAILED';
export const FOLLOW_ACTION_UNFOLLOW_FAILED = 'FOLLOW_ACTION_UNFOLLOW_FAILED';

// Rating action types
export const RATING_ARTICLE = 'RATING_ARTICLE';
export const RATED_ARTICLE = 'RATED_ARTICLE';
export const RATING_ARTICLE_ERROR = 'RATING_ARTICLE_ERROR';
