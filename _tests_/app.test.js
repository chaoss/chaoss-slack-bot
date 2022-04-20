const { App } = require('@slack/bolt');

const dotenv = require('dotenv');
dotenv.config();

require('../app.js');

jest.mock('@slack/bolt', () => {
  const myApp = {
    message: jest.fn(),
    action: jest.fn(),
    start: jest.fn(),
  };
  return { App: jest.fn(() => myApp) };
});

describe('test', () => {
  let app = App;
  beforeAll(() => {
    app = new App();
  });

  it('test the bot', async () => {
    await app.start();
    expect(app.message).toBeCalledWith('hello', expect.any(Function));
  });
});
