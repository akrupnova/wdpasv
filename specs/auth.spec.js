import LoginPage from  '../pages/login.page';
import ProfilePAge from '../pages/app/profile.page';

describe('Auth', () => {
    beforeEach (async () => {
        await LoginPage.open();
    });

    it('successful log in', async () => {
        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
        await expect(ProfilePAge.iconAvatar).toBeDisplayed();
    });

    it('wrong credentials throws error', async () => {
        await LoginPage.login('wrong@mail.com', 'wrong');
        await expect(LoginPage.notification).toHaveTextContaining('Auth failed');
    });

    it('email validation error', async () => {
        await LoginPage.inputEmail.setValue('wrong');
  //      await expect(LoginPage.emailValidation).toBeDisplayed();
        await expect(LoginPage.emailValidation).toHaveTextContaining('\'email\' is not a valid email');
    });

    it('email required validation', async () => {
        await LoginPage.inputEmail.setValue('invalid@example.com');
        await LoginPage.inputEmail.smartClear();
        await expect(LoginPage.emailValidation).toHaveTextContaining('Required');
    });

    it('password required validation', async () => {
        await LoginPage.inputPassword.setValue('invalid');
        await LoginPage.inputPassword.smartClear();
        await expect(LoginPage.passwordValidation).toHaveTextContaining('Required');
    });
});
