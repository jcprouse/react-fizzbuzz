import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App> test suite', () => {
  it('renders a textbox with default value of 1', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#txtInput').prop('value')).toEqual(1);
  });

  it('clicking increment increases value', () => {
    const wrapper = shallow(<App />);
    wrapper.find('#inc').simulate('click');
    expect(wrapper.find('#txtInput').prop('value')).toEqual(2);
  });

  it('position with a multiple of 3 but not 5 gives the value Fizz', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ position: 6 });
    expect(wrapper.find('#txtInput').prop('value')).toEqual('Fizz');
  });
  it('position with a multiple of 5 but not 3 gives the value Buzz', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ position: 10 });
    expect(wrapper.find('#txtInput').prop('value')).toEqual('Buzz');
  });
  it('position with a multiple of 3 a 5 gives the value FizzBuzz', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ position: 15 });
    expect(wrapper.find('#txtInput').prop('value')).toEqual('Fizzbuzz');
  });

});

