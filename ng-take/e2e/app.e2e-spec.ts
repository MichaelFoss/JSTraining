import { NgTakePage } from './app.po';

describe('ng-take App', () => {
  let page: NgTakePage;

  beforeEach(() => {
    page = new NgTakePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
