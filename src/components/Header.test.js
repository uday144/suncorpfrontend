
import React from 'react';
import { shallow, mount  } from 'enzyme';
import Header from './Header';


describe("Header", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Header />);
  });

  let wrapper;

  it('wraps content in a div with .notificationsFrame class', () => {
    wrapper = shallow(<Header />);
    expect(wrapper.find('.header').length).toEqual(1);
  });

  it('has a title of Suncorp Lending', () => {
    wrapper = mount(<Header />)
    expect(wrapper.find('span').at(0).text()).toBe("Suncorp Lending")
  })

});