import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to cicd!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
  it('should click three times and reset with matching points', () => {
    page.navigateTo();

    expect(page.getPoints()).toBe('1');

    page.getPlus1Button().click();
    page.getPlus1Button().click();
    page.getPlus1Button().click();

    expect(page.getPoints()).toBe('4');

    page.getResetButton().click();

    expect(page.getPoints()).toBe('0');
  });
});
