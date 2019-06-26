import React from 'react';
import {
  render,
  getByTestId,
  fireEvent,
  queryByTestId
} from '@testing-library/react';
import {App} from './App';
import * as dependency from './api/github';
import {MOCK_RESULTS} from '../testUtils/mockData';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

describe('App', () => {
  it('App', async () => {
    const spy = jest.fn(() => Promise.resolve(MOCK_RESULTS));
    dependency.searchUser = spy;
    const {container} = render(<App />);
    expect(container).toMatchSnapshot();
    const input = getByTestId(container, 'search-input');
    expect(input.value).toBe('');
    fireEvent.change(input, {target: {value: 'testInput'}});
    expect(input.value).toBe('testInput');
    expect(spy).toHaveBeenCalledTimes(0);
    await sleep(600); // Wait for the debounce (500ms)
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toBeCalledWith('testInput');
    const results = getByTestId(container, 'user-results');
    expect(results).toMatchSnapshot();
  });

  it('App with errors', async () => {
    const spy = jest.fn(() => Promise.reject('Error'));
    dependency.searchUser = spy;
    const {container} = render(<App />);
    expect(container).toMatchSnapshot();
    const input = getByTestId(container, 'search-input');
    expect(input.value).toBe('');
    fireEvent.change(input, {target: {value: 'testInput'}});
    expect(input.value).toBe('testInput');
    expect(spy).toHaveBeenCalledTimes(0);
    await sleep(600); // Wait for the debounce (500ms)
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toBeCalledWith('testInput');
    const error = getByTestId(container, 'user-results-error');
    expect(error).toMatchSnapshot();
    fireEvent.change(input, {target: {value: 'Error go away'}});
    expect(queryByTestId(container, 'user-results-error')).toBeNull();
  });
});
