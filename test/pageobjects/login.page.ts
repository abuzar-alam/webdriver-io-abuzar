import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $("[name = 'username']");
    }

    public get nextButton () {
        return $("//span[contains(text(),'Next')]");
    }

    public get loginButton() {
        return $("[name='login']");
    }

    public get inputPassword () {
        return $("[type='password']");
       //return $("[class='mat-form-field-flex ng-tns-c230-1']");
    }

    public get stayLoggedIn () {
        return $("#mat-checkbox-1");
    }

    /**
     * Method to login into the app
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.nextButton.click();
        await this.inputPassword.waitForDisplayed({timeout: 5000});
        await this.inputPassword.waitForClickable({timeout: 5000});
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    /**
     * Method to open Login Page
     */
    public open () {
        browser.maximizeWindow();
        return super.open('auth/login');
    }
}

export default new LoginPage();
