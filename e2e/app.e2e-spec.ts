import { Angular4testPage } from './app.po';

describe('angular4test App', () => {
  let page: Angular4testPage;

  beforeEach(() => {
    page = new Angular4testPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
