import { CaPage } from './app.po';

describe('ca App', function() {
  let page: CaPage;

  beforeEach(() => {
    page = new CaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
