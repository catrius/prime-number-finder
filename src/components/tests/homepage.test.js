import React from 'react';
import { shallow, mount } from 'enzyme';
import { Headline4, Headline5 } from '@material/react-typography';
import TextField, { Input } from '@material/react-text-field';
import Button from '@material/react-button';

import Homepage from 'components/homepage';


describe('Homepage', function () {
  it('should render correctly the on first time visit', function () {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.find(Headline4).dive()).toHaveText('Previous prime number calculator');
    expect(wrapper.find(TextField)).toExist();
    expect(wrapper.find(TextField).find(Input)).toExist();
    expect(wrapper.find(Headline5).dive()).toHaveText('Input your number above');
  });

  it('should calculate previous prime number if pressing enter when focusing on input', function () {
    const wrapper = shallow(<Homepage />);
    const input = wrapper.find(TextField).find(Input);

    expect(wrapper.find(Headline5).dive()).toHaveText('Input your number above');

    input.simulate('change', { currentTarget: { value: 100 } });
    input.simulate('keypress', { key: 'Shift' });
    expect(wrapper.find(Headline5).dive()).toHaveText('Input your number above');

    input.simulate('keypress', { key: 'Enter' });
    expect(wrapper.find(Headline5).dive()).toHaveText('97');

    input.simulate('change', { currentTarget: { value: 0 } });
    input.simulate('keypress', { key: 'Enter' });
    expect(wrapper.find(Headline5).dive()).toHaveText('Not found');
  });

  it('should calculate previous prime number if clicking on calculate button', function () {
    const wrapper = shallow(<Homepage />);
    const input = wrapper.find(TextField).find(Input);
    const button = wrapper.find(Button);

    expect(wrapper.find(Headline5).dive()).toHaveText('Input your number above');

    input.simulate('change', { currentTarget: { value: 100 } });
    button.simulate('click');
    expect(wrapper.find(Headline5).dive()).toHaveText('97');

    input.simulate('change', { currentTarget: { value: 0 } });
    button.simulate('click');
    expect(wrapper.find(Headline5).dive()).toHaveText('Not found');
  });
});
