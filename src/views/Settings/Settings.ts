import { Component, Vue } from 'vue-property-decorator';
import user from '@/mockData/user.json';
import { User } from '@/models/User';

@Component
export default class Settings extends Vue {
  private form = 'default';

  private get user(): User {
    return user;
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
}
