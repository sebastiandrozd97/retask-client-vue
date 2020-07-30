import { Component, Prop, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar/Navbar.vue';

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  @Prop() private msg!: string;
}
