import BasePage from './base.page';

class DiaryPage extends BasePage {
    //  get headerItem() { return $('//h1[contains(@class, "jumbo-title")][contains(text(), "Diaries")]') }
    get headerItem() { return $('//h1[text()="Daily reports"]') }
}

export default new DiaryPage();