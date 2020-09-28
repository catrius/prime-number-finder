import React from 'react';
import { shallow } from 'enzyme';
import { Headline4, Headline5 } from '@material/react-typography';
import TextField, { Input } from '@material/react-text-field';
import Button from '@material/react-button';
import { stub } from 'sinon';

import { Homepage } from 'components/homepage';
import { FAIL, REQUEST } from 'utils/constants';


describe('Homepage', () => {
  let fetchPrime;
  let wrapper;

  beforeEach(() => {
    fetchPrime = stub();
    wrapper = shallow(<Homepage fetchPrime={ fetchPrime } prime={ 7 } />);
  });

  it('should render correctly the on first time visit', () => {
    expect(wrapper.find(Headline4).dive()).toHaveText('Previous prime number calculator');
    expect(wrapper.find(TextField)).toExist();
    expect(wrapper.find(TextField).find(Input)).toExist();
    expect(wrapper.find(Headline5).dive()).toHaveText('Input your number above');
  });

  it('should render correctly if there is prime', () => {
    const button = wrapper.find(Button);

    expect(wrapper.find(Headline4).dive()).toHaveText('Previous prime number calculator');
    expect(wrapper.find(Headline5).dive()).toHaveText('Input your number above');

    button.simulate('click');

    expect(wrapper.find(Headline5).dive()).toHaveText('7');
  });

  it('should call fetchPrime if pressing enter when focusing on input', () => {
    const input = wrapper.find(TextField).find(Input);

    expect(wrapper.find(Headline5).dive()).toHaveText('Input your number above');

    input.simulate('change', { currentTarget: { value: 100 } });
    input.simulate('keypress', { key: 'Shift' });
    expect(wrapper.find(Headline5).dive()).toHaveText('Input your number above');

    input.simulate('keypress', { key: 'Enter' });
    expect(fetchPrime.calledOnce).toBe(true);
  });

  it('should calculate previous prime number if clicking on calculate button', () => {
    const input = wrapper.find(TextField).find(Input);
    const button = wrapper.find(Button);

    expect(wrapper.find(Headline5).dive()).toHaveText('Input your number above');

    input.simulate('change', { currentTarget: { value: 100 } });
    button.simulate('click');
    expect(fetchPrime.calledOnce).toBe(true);
  });

  it('should show result based on fetchState', () => {
    const input = wrapper.find(TextField).find(Input);
    const button = wrapper.find(Button);

    expect(wrapper.find(Headline5).dive()).toHaveText('Input your number above');

    input.simulate('change', { currentTarget: { value: 100 } });
    button.simulate('click');

    wrapper.setProps({
      fetchPrime,
      fetchState: REQUEST,
    });
    expect(wrapper.find(Headline5).dive()).toHaveText('Calculating...');

    wrapper.setProps({
      fetchPrime,
      fetchState: FAIL,
    });
    expect(wrapper.find(Headline5).dive()).toHaveText('Something wrong happened');
  });
});
