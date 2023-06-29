Feature('login');

const {I, home_page} = inject()

BeforeSuite(()=>{
    console.log("Suite")
})

Before(()=>{
    console.log("Scenario")
})

AfterSuite(()=>{
    console.log("AfterSuite")
})

After(()=>{
    console.log("After")
})
Scenario('Login with success',  () => {

    login_page.doLogin('teste@teste.com','123456')
    home_page.checkLoginSuccess()
   
});

Scenario('Login with error',  () => {

    login_page.doLogin('xteste@teste.com','123456')
    login_page.checkLoginError()

});
