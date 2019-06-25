import {render, fireEvent, waitForElement} from '@testing-library/react';

import {ActivityHistory} from './index';

jest.mock('axios');

describe('Test 1', () => {
  it('Check A', async () => {
    const actual = true;
    expect(actual).toBe(false);
  });
});

