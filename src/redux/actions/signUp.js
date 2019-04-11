import axios from 'axios';
import { SIGN_UP, SIGN_UP_ERROR } from '../actionTypes/index';

// const BASEURL = 'https://authorshaven.herokuapp.com';
const BASEURL = 'http://localhost:3000';


/**
 * @description user sign up
 * @param {object} values
 * @param {function} toggleSignupModal
 * @param {function} toggleVerify
 * @returns {object} action
 */
export async function signUp(values, toggleSignupModal, toggleVerify) {
  try {
    const request = await axios.post(`${BASEURL}/api/users`, values);
    const { user } = request.data;

    if (user) {
      await toggleSignupModal();
      await toggleVerify();
    }
    return {
      type: SIGN_UP,
      payload: user
    };
  } catch (error) {
    return {
      type: SIGN_UP_ERROR,
      payload: error.response.data
    };
  }
}
export default signUp;
