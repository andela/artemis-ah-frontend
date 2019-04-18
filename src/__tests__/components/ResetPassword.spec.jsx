import 'babel-polyfill';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ResetPassword from '../../views/ResetPasswordPage';
import reducers from '../../redux/reducers';

describe('ResetPassword Page Component', () => {
  const store = createStore(reducers, applyMiddleware(ReduxPromise));
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <ResetPassword />
      </Router>
    </Provider>
  );

  it('should match the given snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate form submit', () => {
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('.reset_body_response_text')).toMatchObject({});
  });

  it('should simulate changes', () => {
    const newPassword = wrapper.find('[name="newPassword"]');
    const confirmPassword = wrapper.find('[name="confirmPassword"]');
    newPassword.simulate('change', { currentTarget: { value: 'Tyler' } });
    confirmPassword.simulate('change', { currentTarget: { value: 'John' } });
    const button = wrapper.find('[disabled="false"]');
    expect(button).toMatchObject({});
    expect(wrapper.find('button').text()).toEqual('Save');
  });
});

describe('should match the shallow snapshot', () => {
  const wrapper = shallow(<ResetPassword />);

  it('should match the state of component', () => {
    expect(wrapper.state('fetching')).toEqual(false);
    expect(wrapper).toMatchSnapshot();
  });
});
