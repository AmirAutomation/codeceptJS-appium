const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields:{
    email: "~email",
    password: "~senha",
  },

  buttons:{
    enter: "~entrar"
  },

  message:{
    loginError: "~lognFail"
  },

  doLogin(email, password){

    //I.retry(2).fillField(this.fields.email,email)
    I.fillField(this.fields.email,email)
    I.fillField(this.fields.password, password)
    I.tap(this.buttons.enter)

  },
  checkLoginError(){
    I.waitForElement(this.message.loginError, 5)
    I.seeElement(this.message.loginError)
  }
}
