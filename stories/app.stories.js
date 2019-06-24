import React from 'react';

import {storiesOf} from '@storybook/react';
import App from '../src/App';

storiesOf('The App', module)
  .add('to Storybook', () => <App/>);
