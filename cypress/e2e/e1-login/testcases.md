# Test cases for [SauceDemo](https://www.saucedemo.com)
## TC 1: Sucessful login
1. go to the website: www.saucedemo.com
2. with the credentials:
    * user: \<valid user>
    * password: \<valid password>
3. should redirect to the inventory
### It should'nt do:
* show a error message
* stay in the same page

## TC2: Log in with wrong credentials
1. go to the website: www.saucedemo.com
2. with the credentials:
    * user: \<wrong user>
    * password: \<wrong pass>
3. should stay in the same page
4. should show an error message about wrong credentials
### it should'nt do
* redirect to another page
* allow to go www.saucedemo.com/inventory
## TC3: Log in with locked-out credentials
1. go to the website: www.saucedemo.com
2. with the credentials:
    * user: \<locked user>
    * password: \<locked pass>
3. should stay in the same page
4. should show an error message about that the user has been locked out
### it should'nt do
* redirect to another page
* allow to go www.saucedemo.com/inventory
## TC4: Log Out
1. go to the website: www.saucedemo.com
2. with the credentials:
    * user: \<valid user>
    * password: \<valid password>
3. should redirect to the inventory
4. click on the burger menu
5. click on logout
6. redirect to login page
### it should'nt do
* stay in the inventory page
