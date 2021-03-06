import authReducer, { initialState } from '../../../redux/reducers/authReducer';

describe('SignUp test cases', () => {
  it('sets signedUp to true after', () => {
    const mockLocalStorage = {};
    const mockSessionStorage = {};
    const state = authReducer(initialState(mockLocalStorage, mockSessionStorage), {
      type: 'SIGN_UP',
    });
    expect(state.signedUp).toEqual(true);
    expect(state.loading).toEqual(false);
  });
  it('sets signedUp to false when there is an error', () => {
    const mockLocalStorage = {};
    const mockSessionStorage = {};
    const state = authReducer(initialState(mockLocalStorage, mockSessionStorage), {
      type: 'SIGN_UP_ERROR',
    });
    expect(state.signedUp).toEqual(false);
    expect(state.loading).toEqual(false);
  });
});

describe('auth reducer initial state', () => {
  it('should return the right state when local storage is empty', () => {
    const mockLocalStorage = {};
    const mockSessionStorage = {};
    const state = authReducer(initialState(mockLocalStorage, mockSessionStorage), {});
    expect(state.isLoggedIn).toEqual(false);
    expect(state.token).toEqual('');
    expect(state.errorMessages).toEqual({});
    expect(state.loading).toEqual(false);
  });
  it('returns the user details stored when local storage is filled', () => {
    const mockLocalStorage = {
      authorsHavenToken: 'abc'
    };
    const mockSessionStorage = {};
    const state = authReducer(initialState(mockLocalStorage, mockSessionStorage), {});
    expect(state.isLoggedIn).toEqual(true);
    expect(state.token).toEqual('abc');
    expect(state.errorMessages).toEqual({});
    expect(state.loading).toEqual(false);
  });
});

describe('auth reducer', () => {
  it("updates the state's token and isLoggedIn fields when Login action is dispatched", () => {
    const mockLocalStorage = {};
    const mockSessionStorage = {};
    const state = authReducer(initialState(mockLocalStorage, mockSessionStorage), {
      type: 'LOGIN_USER',
      payload: { token: 'abc' }
    });
    expect(state.token).toEqual('abc');
    expect(state.isLoggedIn).toEqual(true);
    expect(state.loading).toEqual(false);
  });
  it("updates the state's loading field when Loading action is dispatched", () => {
    const mockLocalStorage = {};
    const mockSessionStorage = {};
    const state = authReducer(initialState(mockLocalStorage, mockSessionStorage), {
      type: 'AUTH_LOADING'
    });
    expect(state.loading).toEqual(true);
  });
  it("updates the state's loading and error messages fields when Login error action is dispatched", () => {
    const mockLocalStorage = {};
    const mockSessionStorage = {};
    const state = authReducer(initialState(mockLocalStorage, mockSessionStorage), {
      type: 'LOGIN_ERROR',
      payload: {
        message: 'invalid credentials'
      }
    });
    expect(state.loading).toEqual(false);
    expect(state.errorMessages).toEqual({
      errors: {
        general: 'invalid credentials'
      }
    });
  });
  it("updates the state's error messages field with the exact name error that was dispatched", () => {
    const mockLocalStorage = {};
    const mockSessionStorage = {};
    const state = authReducer(initialState(mockLocalStorage, mockSessionStorage), {
      type: 'LOGIN_ERROR',
      payload: {
        errors: {
          name: ['name is required']
        }
      }
    });
    expect(state.loading).toEqual(false);
    expect(state.errorMessages).toEqual({
      errors: {
        name: ['name is required']
      }
    });
  });
  it("updates the state's error messages field with the exact password error that was dispatched", () => {
    const mockLocalStorage = {};
    const mockSessionStorage = {};
    const state = authReducer(initialState(mockLocalStorage, mockSessionStorage), {
      type: 'LOGIN_ERROR',
      payload: {
        errors: {
          password: ['password is required']
        }
      }
    });
    expect(state.loading).toEqual(false);
    expect(state.errorMessages).toEqual({
      errors: {
        password: ['password is required']
      }
    });
  });
  it("should clear the state's error messages field when clear auth error action is dispatched", () => {
    const mockLocalStorage = {};
    const mockSessionStorage = {};
    const state = authReducer(initialState(mockLocalStorage, mockSessionStorage), {
      type: 'CLEAR_AUTH_ERROR'
    });
    expect(state.errorMessages).toEqual([]);
  });


  it("updates the state's token and isLoggedIn fields when Logout action is dispatched", () => {
    const mockState = {
      token: 'abcd',
      isLoggedIn: true,
    };
    const state = authReducer(mockState, {
      type: 'LOGOUT_USER'
    });
    expect(state.token).toEqual('');
    expect(state.isLoggedIn).toEqual(false);
  });
});
