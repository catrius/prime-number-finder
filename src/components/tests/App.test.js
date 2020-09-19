import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import Homepage from 'components/homepage';


describe('App', function () {
  it('should render homepage', function () {
    const wrapper = shallow(<App />);
    expect(wrapper).toContainReact(<Homepage />);
  });
});
