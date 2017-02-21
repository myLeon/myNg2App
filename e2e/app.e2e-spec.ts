import { CNPCSHYFrontPage } from './app.po';

describe('cnpc-shy-front App', function() {
  let page: CNPCSHYFrontPage;

  beforeEach(() => {
    page = new CNPCSHYFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
