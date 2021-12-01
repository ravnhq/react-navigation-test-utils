import * as React from 'react';
import FirstScreen from './FirstScreen';
import {render} from '../../../test-utils/render';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Testing react navigation', () => {
  it('renders first screen', () => {
    render(<FirstScreen />);
  });
});

describe('navigation buttons', () => {
  it('renders first Screen text', async () => {
    const {getByText} = render(<FirstScreen />);

    const firstText = getByText('Insert the title for the second screen:');
    expect(firstText.props.children).toBe(
      'Insert the title for the second screen:',
    );
  });
  it(' goes to next screen', async () => {
    const {getByTestId} = render(<FirstScreen />);

    const firstBtn = getByTestId('firstBtn');
    //fireEvent.press(firstBtn);
  });
});
