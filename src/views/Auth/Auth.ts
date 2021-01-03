import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Auth extends Vue {
  private form = 'login';

  private email = '';
  private password = '';

  private registerUserName = '';
  private registerFirstName = '';
  private registerLastName = '';
  private registerPhoneNumber = '';

  get currentForm() {
    return this.form;
  }

  loginUser() {
    if (this.email && this.password) {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/users/login`,
          method: 'post',
          data: {
            email: this.email,
            password: this.password
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

  register() {
    if (this.email && this.password && this.registerUserName && this.registerFirstName && this.registerLastName) {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/users/register`,
          method: 'post',
          data: {
            username: this.registerUserName,
            email: this.email,
            password: this.password,
            firstName: this.registerFirstName,
            lastName: this.registerLastName,
            phoneNumber: this.registerPhoneNumber
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

  remindPassword() {
    console.log('Wysłano email');
  }
}
