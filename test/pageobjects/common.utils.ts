class CommonUtils {
    /*
    *Contains common locators and methods which will be needed by everyone
    */
    public get tenantSearchBar(){
        return $("[placeholder='search tenants']");
    }

    public get tenantName(){
        return $("[class='client-name-text']");
    }

    public waitForAnElement (element: string, TIMEOUT: number){
        
    }

    public async selectTenant(tenantName: string){
        await this.tenantSearchBar.waitForDisplayed({timeout: 5000});
        await this.tenantSearchBar.waitForClickable({timeout: 5000});
        await this.tenantSearchBar.setValue(tenantName);
        await this.tenantName.waitForDisplayed({timeout: 5000});
        await this.tenantName.waitForClickable({timeout: 5000});
        await this.tenantName.click();
    }

    public async selectModule (moduleName: string){
        await $("//span[contains(text(),'"+moduleName+"')]").click();
        await this.tenantName.waitForDisplayed({timeout: 10000});
    }
}

export default new CommonUtils();