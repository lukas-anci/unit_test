const { expect } = require('@jest/globals');
const getUser = require('./promise');

it('email should be Shanna@melissa.tv', () => {
  expect.assertions(1);
  return getUser().then((data) => {
    expect(data.email).toBe('Shanna@melissa.tv');
  });
});
it('email should be Shanna@melissa.tv ASYNC', async () => {
  expect.assertions(1);
  const data = await getUser();
  expect(data.email).toBe('Shanna@melissa.tv');
});
