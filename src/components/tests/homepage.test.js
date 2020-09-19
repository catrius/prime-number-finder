import React from 'react';
import { shallow } from 'enzyme';
import { Headline4, Headline5 } from '@material/react-typography';
import TextField, { Input } from '@material/react-text-field';

import Homepage from 'components/homepage';


describe('Homepage', function () {
  it('should render correctly', function () {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.find(Headline4)).toExist();
    expect(wrapper.find(TextField)).toExist();
    expect(wrapper.find(TextField).find(Input)).toExist();
    expect(wrapper.find(Headline5)).toExist();
  });

  it('should calculate previous prime number', function () {
    const wrapper = shallow(<Homepage />);
    const input = wrapper.find(TextField).find(Input);

    let output = wrapper.find(Headline5);
    expect(output.dive()).toHaveText('Input your number above');

    input.simulate('change', { currentTarget: { value: 100 } });
    input.simulate('keypress', { key: 'Shift' });

    output = wrapper.find(Headline5);
    expect(output.dive()).toHaveText('Input your number above');

    input.simulate('keypress', { key: 'Enter' });

    output = wrapper.find(Headline5);
    expect(output.dive()).toHaveText('97');

    input.simulate('change', { currentTarget: { value: 0 } });
    input.simulate('keypress', { key: 'Enter' });

    output = wrapper.find(Headline5);
    expect(output.dive()).toHaveText('Not found');
  });
});
