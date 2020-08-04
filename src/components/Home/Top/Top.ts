import { Component, Prop, Vue } from 'vue-property-decorator';
import user from '@/mockData/user.json';

@Component
export default class Top extends Vue {
  @Prop() private msg!: string;
  firstName = user.firstName;
}
