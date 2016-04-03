import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Card from './../src/components/card/card';

describe('Card (Component)', () => {
  const wrapper = shallow(<Card />);

  it('The component should be enclosed in a div and with a className of "card"', () => {
    expect(wrapper.type()).to.eql('div');
    expect(wrapper.hasClass('card')).to.eql(true);
  });

  it('should contain one image tag', () => {
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should contain and unordered list of class name ' +
    '"list-group" with two list items of class name "list-group-item"', () => {
    const shallowUl = wrapper.find('ul');
    const shallowUlLi = shallowUl.at(0).find('li');
    expect(shallowUl).to.have.length(1);
    expect(shallowUl.at(0).hasClass('list-group')).to.eql(true);
    expect(shallowUlLi).to.have.length(2);
    expect(shallowUlLi.at(0).hasClass('list-group-item')).to.eql(true);
  });
});
