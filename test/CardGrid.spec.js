import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CardGrid from './../src/components/CardGrid/CardGrid';
import Card from './../src/components/card/card';

describe('CardGrid (component)', () => {
  const shallowCardGrid = function (props) {
    return shallow(<CardGrid arrOfCards={ props } />);
  };

  it('should be contained in a div with a class name of "card-columns"', () => {
    expect(shallowCardGrid([1]).type()).to.eql('div');
  });
  it(
    'should render the amount of cards based on the amount of' +
    ' elements in the array being passed in', () => {
    const fiveCardGrid = shallowCardGrid([1, 2, 3, 4, 5]);
    const twelveCardGrid = shallowCardGrid([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(fiveCardGrid.find(Card)).to.have.length(5);
    expect(twelveCardGrid.find(Card)).to.have.length(12);
  });
});
