
import React from 'react';
import { shallow } from 'enzyme';
import Errormsg from './Errormsg';


describe("Errormsg", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Errormsg />);
  });

  it('renders', () => {
    const wrapper = shallow(<Errormsg Errormsg="Amount cannot be empty!" />);
    expect(wrapper.find('span').text()).toEqual('Error: Amount cannot be empty!');
  });

  
});