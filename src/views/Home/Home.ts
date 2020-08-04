import { Component, Prop, Vue } from 'vue-property-decorator';
import Top from '@/components/Home/Top/Top.vue';

@Component({
  components: {
    Top
  }
})
export default class Home extends Vue {
  @Prop() private msg!: string;
}
