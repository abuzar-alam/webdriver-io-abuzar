import LoginPage from  '../pageobjects/login.page';
import CommonUtils from '../pageobjects/common.utils';
import {USER, PSWD, TENANT, MODULE} from '../constants/alpha-constants';

describe('Login to Alpha and Select Tenant', () => {
    
    it('I should be able to login to Alpha', async () => {
        await LoginPage.open();
        await LoginPage.login(USER.AML_USER, PSWD.DEFAULT_PSWD );
    });

    it ('I should be able to select tenant', async() => {
        await CommonUtils.selectTenant(TENANT.AML_TENANT);
    });

    it ('I should be able to navigate to AML module',async () => {
        await CommonUtils.selectModule(MODULE.AML);
    });
});

