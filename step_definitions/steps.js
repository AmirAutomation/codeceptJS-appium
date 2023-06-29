const { I } = inject();
// Add in your custom step files



Given('I have a defined step', () => {
  
});

Given('I fill email', () => {
  // From "features\basic.feature" {"line":7,"column":5}
  I.fillField('~email','teste@teste.com')
});

Given('I fill password', () => {
  I.fillField('~senha', '123456')
});

When('I tap in Entrar', () => {
  I.tap('~entrar')
});

Then('I see the Save buttton', () => {
  I.waitForElement( '~salvar', 5)
  I.seeElement('~salvar')
});
