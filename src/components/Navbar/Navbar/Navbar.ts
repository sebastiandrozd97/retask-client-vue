import { Component, Watch, Vue } from 'vue-property-decorator';
import { routes } from '@/helpers/navigation-routes.json';
import Notifications from '@/components/Navbar/Notifications/Notifications/Notifications.vue';

@Component({
  components: {
    Notifications
  }
})
export default class Navbar extends Vue {
  private isMenuOpen = false;

  get routes() {
    return routes;
  }

  get tabindex() {
    if (this.isMenuOpen) {
      return { ['tabindex']: 1 };
    }
    return { ['tabindex']: -1 };
  }

  @Watch('isMenuOpen')
  onMenuOpen(val: boolean) {
    if (val) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'visible';
  }
}
