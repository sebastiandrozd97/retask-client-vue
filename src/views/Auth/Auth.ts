import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Auth extends Vue {
  private form = 'login';
  private loginEmail = '';
  private loginPassword = '';

  get currentForm() {
    return this.form;
  }

  loginUser() {
    if (this.loginEmail && this.loginPassword) {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/users/login`,
          method: 'post',
          data: {
            email: this.loginEmail,
            password: this.loginPassword
          }
        })
        .then(response => {
          console.log(this.loginEmail);
          console.log(this.loginPassword);
          localStorage.setItem('accessToken', response.data.token);
          this.$router.push({ name: 'Home' });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  register() {
    console.log('Zarejestrowano');
  }

  remindPassword() {
    console.log('Wysłano email');
  }
}
