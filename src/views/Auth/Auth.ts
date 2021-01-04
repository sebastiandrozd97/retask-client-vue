import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { User } from '@/models/User';

@Component
export default class Auth extends Vue {
  private form = 'login';

  private loginUser = new User();
  private registerUser = new User();

  get currentForm() {
    return this.form;
  }

  signIn() {
    if (this.loginUser.email && this.loginUser.password) {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/users/login`,
          method: 'post',
          data: {
            email: this.loginUser.email,
            password: this.loginUser.password
          }
        })
        .then(response => {
          localStorage.setItem('accessToken', response.data.token);
          this.$router.push({ name: 'Home' });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  signUp() {
    if (this.registerUser.email && this.registerUser.password) {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/users/register`,
          method: 'post',
          data: this.registerUser
        })
        .then(response => {
          localStorage.setItem('accessToken', response.data.token);
          this.$router.push({ name: 'Home' });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  remindPassword() {
    console.log('Wysłano email');
  }
}
