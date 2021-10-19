import {addCommands, getAuthData} from '../../helpers/setup.helper';
import allure from '@wdio/allure-reporter';

module.exports = {
    before: async function (capabilities, specs, browser) {
        await addCommands();
        await getAuthData();
    },

    afterTest: async function (test, context, result) {
        if (test.failed || result.error) {
            await browser.takeScreenshot();
            allure.addAttachment('URL', await browser.getUrl(), 'text/plain');
        }
    }
};