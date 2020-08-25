import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Auth extends Vue {
  private form = 'login';

  get currentForm() {
    return this.form;
  }

  login() {
    console.log('Zalogowano');
  }

  register() {
    console.log('Zarejestrowano');
  }

  remindPassword() {
    console.log('Wysłano email');
  }
}
