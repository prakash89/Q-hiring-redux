import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import React from 'react';
import { shallow } from 'enzyme';
import Login from './login';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});



describe('(Component) Login', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Provider store={store} ><Login /></Provider>);
  })

  it('renders without exploding', () => {
    expect(wrapper.length).toEqual(1);
  });

});