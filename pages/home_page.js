const { I } = inject();

module.exports = {

  button:{
    save: "~salvar"
  },
  homeFill:{
    codigo: {
      ios: '',
      android:'//android.widget.EditText[@content-desc="codigo"]',
    },
    name:{
      ios: '',
      android:'//android.widget.EditText[@content-desc="aluno"]',
    },
    serch: {
      ios: '',
      android:'//android.widget.EditText[@content-desc="search"]',
    }

  },

  checkLoginSuccess(){
    I.waitForElement(this.button.save, 5)
    I.seeElement(this.button.save)
  },

  registerStudent(code, name){
    I.fillField(this.homeFill.codigo, code)
    I.fillField(this.homeFill.name, name)
    I.tap(this.button.save)
  },

  searchStudent(serch, code){

    I.fillField(this.homeFill.serch, serch)
    I.runOnIOS(()=>{
      I.seeElement('//android.view.ViewGroup[@content-desc="'+code+'"]')

    })
    I.runOnAndroid(()=>{
      I.seeElement('//android.view.ViewGroup[@content-desc="'+code+'"]/android.widget.TextView')
    })
  }
}
