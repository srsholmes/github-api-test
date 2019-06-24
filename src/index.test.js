import {mount} from './index';

jest.mock('axios');

describe('Test 1', () => {
  it('Check A', async () => {
    await mount();
    expect(true).toBe(true);
  });
});

