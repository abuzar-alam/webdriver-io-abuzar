import LoginPage from  '../pageobjects/login.page';
import CommonUtils from '../pageobjects/common.utils';
import {USER, PSWD, TENANT, MODULE} from '../constants/alpha-constants';

describe('Login to Alpha and Select Tenant', () => {

    var loginDetails = CommonUtils.getLoginData();
    var userID = loginDetails.QA[1].A;
    var password = loginDetails.QA[1].B;

    it('I should be able to login to Alpha', async () => {
        await LoginPage.open();
        await LoginPage.login(USER.AML_USER, PSWD.DEFAULT_PSWD );
        await LoginPage.login(userID, password);
    });
    
    it ('I should be able to select tenant', async() => {
        await CommonUtils.selectTenant(TENANT.AML_TENANT);
    });

    it ('I should be able to navigate to AML module',async () => {
        await CommonUtils.selectModule(MODULE.AML);
    });
    
});

