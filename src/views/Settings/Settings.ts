import { Component, Vue } from 'vue-property-decorator';
import { User } from '@/models/User';
import axios from 'axios';

@Component
export default class Settings extends Vue {
  private form = 'default';
  private user = new User();

  private async getUser(): Promise<User> {
    const request = await axios.get(`${process.env.VUE_APP_API_URL}/users/current`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    });

    return request.data;
  }

  get currentForm() {
    return this.form;
  }

  save() {
    console.log('Zapisano zmiany');
  }

  changePassword() {
    console.log('Zmieniono hasło');
  }

  async created() {
    this.user = await this.getUser();
  }
}
