import { Component, Vue } from 'vue-property-decorator';
import { routes } from '@/helpers/navigation-routes.json';

@Component
export default class Navbar extends Vue {
  private isMenuOpen = false;

  get routes() {
    return routes;
  }
}
