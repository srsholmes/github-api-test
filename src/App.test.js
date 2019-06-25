import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import { App } from './App';
import * as dependency from './api/github';

jest.mock('./api/github', () => ({
  searchUser: jest.fn(() => Promise.resolve([]))
}));

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

describe('App', () => {
  it('App', async () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
    const input = getByTestId(container, 'search-input');
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'testInput' } });
    expect(input.value).toBe('testInput');
    expect(dependency.searchUser).toHaveBeenCalledTimes(0);
    await sleep(600); // Wait for the debounce (500ms)
    expect(dependency.searchUser).toHaveBeenCalledTimes(1);
    expect(dependency.searchUser).toBeCalledWith('testInput');
  });
});
