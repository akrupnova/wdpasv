import BasePage from './base.page';

class DiaryPage extends BasePage {
    get headerItem() { return $('//h1[text()="Daily reports"]') }
}

export default new DiaryPage();