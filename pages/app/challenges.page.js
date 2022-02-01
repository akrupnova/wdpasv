import BasePage from './base.page';

class ChallengesPage extends BasePage {
  // get headerItem() { return $('//h1[contains(@class, "jumbo-title")][contains(text(), "challenges")]') }
   // get headerItem() { return $('//div[text()="Challenges"]') }
 //  get headerItem() { return $('//div[@class="h1 me-4"]') }
   get headerItem() { return $('//div[@class="h1 me-4"]') }

}

export default new ChallengesPage();