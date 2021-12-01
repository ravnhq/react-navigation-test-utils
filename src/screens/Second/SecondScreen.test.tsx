import * as React from 'react';
import SecondScreen from './SecondScreen';
import {render} from '../../../test-utils/render';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Testing react navigation', () => {
  it('renders second screen', () => {
    render(<SecondScreen/>);
  });
});

describe('navigation buttons', () => {
  it('renders first text', async () => {
    const {getByText} = render(<SecondScreen />);

    const firstText = getByText('Second Screen');
    expect(firstText.props.children).toBe('Second Screen');
  });
  it('renders second text with params', async () => {
    const {getByText} = render(<SecondScreen />);

    const secondText = getByText('Hi');
    expect(secondText.props.children).toBe('Hi from Screen');
  });
  it(' goes back', async () => {
    const {getByTestId} = render(<SecondScreen />);

    const secondBtn = getByTestId('secondBtn');
    //fireEvent.press(firstBtn);
  });
});
