import React from 'react';
import {storiesOf} from '@storybook/react';
import {ActivityHistory} from '../src/components/ActivityHistory';
import {MOCK_ACTIVITY} from '../testUtils/mockData';

storiesOf('Activity History', module)
  .add('no activity', () => <ActivityHistory activity={[]} />)
  .add('with Activity', () => <ActivityHistory activity={MOCK_ACTIVITY} />);
