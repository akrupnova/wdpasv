import LoginPage from  '../pages/login.page';
import ProfilePAge from '../pages/profile.page';

describe('Auth', () => {

    it('successful log in', async () => {
        await LoginPage.open();
        await LoginPage.login('krupnova.anna83@gmail.com', '15Nortcele!!!');
        await expect(ProfilePAge.iconAvatar).toBeDisplayed();
    });
});


