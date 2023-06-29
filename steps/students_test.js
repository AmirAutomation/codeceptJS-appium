Feature('students');
const {I, home_page,login_page} = inject()

Scenario('register students',  () => {

    const code= '1122'
    const name = 'Camilo P'
    login_page.doLogin('teste@teste.com','123456')
    home_page.registerStudent(code,name)
    home_page.searchStudent(name,code)
});