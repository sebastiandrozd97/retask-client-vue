import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar/Navbar.vue';

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  get show() {
    return this.$route.path !== '/auth' && this.$route.path !== '/page-not-found';
  }
}
