import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from './login';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import configureMockStore from "redux-mock-store";
import "isomorphic-fetch"
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

const middlewares = [thunk];
configure({ adapter: new Adapter() });
const mockStore = configureMockStore(middlewares);
const store = mockStore({});



describe('(Component) Login', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Provider store={store} ><Login /></Provider>);
  })

  it('renders without exploding', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should dispatch action when clicking submit', () => {
  	const mockCallBack = jest.fn();
  	let store = mockStore({
  		loginData:{
  			message: "Login success",
  			id_token: "876siuh784",
  			email:"emila@gmail.com"
  		}
  	})
  	wrapper = mount(<Provider store={store} ><Login /></Provider>);
	  wrapper.find('.grommetux-button--primary').simulate('click')
	  
	})

});