import { MyNg2AppPage } from './app.po';

describe('my-ng2-app App', function() {
  let page: MyNg2AppPage;

  beforeEach(() => {
    page = new MyNg2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
