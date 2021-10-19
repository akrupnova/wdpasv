import BasePage from './base.page';

class ChallengesPage extends BasePage {
   // get headerItem() { return $('//h1[contains(@class, "jumbo-title")][contains(text(), "challenges")]') }
    get headerItem() { return $('//div[text()=\'Challenges\']') }

}

export default new ChallengesPage();