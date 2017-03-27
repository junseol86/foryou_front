import { ForyouFrontCliPage } from './app.po';

describe('foryou-front-cli App', () => {
  let page: ForyouFrontCliPage;

  beforeEach(() => {
    page = new ForyouFrontCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
