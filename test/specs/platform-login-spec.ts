import LoginPage from  '../pageobjects/login.page';
import CommonUtils from '../pageobjects/common.utils';

describe('Login to Alpha and Select Tenant', () => {
    
    it('I should be able to login to Alpha', async () => {
        let username = 'zafara@360logica.com';
        let password = 'Welc0me19ALPHA-Q@';
        await LoginPage.open();
        await LoginPage.login(username, password );
    });

    it ('I should be able to select tenant', async() => {
        let tenantName = 'AML UI Automation';
        await CommonUtils.selectTenant(tenantName);
    });

    it ('I should be able to navigate to my module',async () => {
        let moduleName = 'AML';
        await CommonUtils.selectModule(moduleName);
    });
});

