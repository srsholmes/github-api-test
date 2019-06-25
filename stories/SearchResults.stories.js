import React from 'react';
import {storiesOf} from '@storybook/react';
import {SearchResults} from '../src/components/SearchResults';
import {MOCK_RESULTS} from '../testUtils/mockData';

storiesOf('Search Results', module)
  .add('no results', () => <SearchResults results={[]} />)
  .add('with results', () => <SearchResults results={MOCK_RESULTS} />);
