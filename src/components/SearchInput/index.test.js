import React from 'react';
import {render, getByTestId, fireEvent} from '@testing-library/react';
import {SearchInput} from './index';

describe('SearchInput', () => {
  it('fires the function passed to by the setInput Prop', () => {
    const onChange = jest.fn();
    const {container} = render(
      <SearchInput value={'hello'} setInput={onChange} />
    );
    const input = getByTestId(container, 'search-input');
    expect(input.value).toBe('hello');
    fireEvent.change(input, {target: {value: 'testInput'}});
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
