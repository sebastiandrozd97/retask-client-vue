import { Component, Vue } from 'vue-property-decorator';
import user from '@/mockData/user.json';

@Component
export default class Top extends Vue {
  firstName = user.firstName;
}
