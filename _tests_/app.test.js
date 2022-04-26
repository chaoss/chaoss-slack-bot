const { App } = require('@slack/bolt');

const dotenv = require('dotenv');
dotenv.config();

require('../app.js');

jest.mock('@slack/bolt', () => {
  const myApp = {
    event: jest.fn(),
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

  it('test the team_join event', async () => {
    await app.start();
    expect(app.event).toBeCalledWith('team_join', expect.any(Function));
  });

  it('test the develop metrics action', async () => {
    await app.start();
    expect(app.action).toBeCalledWith('develop', expect.any(Function));
  });
  it('test the join a meeting action', async () => {
    await app.start();
    expect(app.action).toBeCalledWith('joinMeet', expect.any(Function));
  });
  it('test the contribute to code action', async () => {
    await app.start();
    expect(app.action).toBeCalledWith('contribute', expect.any(Function));
  });
  it('test the helpWithWebsite action', async () => {
    await app.start();
    expect(app.action).toBeCalledWith('helpWithWebsite', expect.any(Function));
  });
  it('test the documentation action', async () => {
    await app.start();
    expect(app.action).toBeCalledWith('docs', expect.any(Function));
  });
  it('test the mentorship action', async () => {
    await app.start();
    expect(app.action).toBeCalledWith('mentorship', expect.any(Function));
  });
  it('test the mentorship action', async () => {
    await app.start();
    expect(app.action).toBeCalledWith('mentorship_selection', expect.any(Function));
  });
  it('test the implement_metrics action', async () => {
    await app.start();
    expect(app.action).toBeCalledWith('implement_metrics', expect.any(Function));
  });
  it('test the learn_something_else action', async () => {
    await app.start();
    expect(app.action).toBeCalledWith('learn_something_else', expect.any(Function));
  });

  it('test the message method', async () => {
    await app.start();
    expect(app.message).toBeCalledWith(/hello|hey|hi/i, expect.any(Function));
  });
});
