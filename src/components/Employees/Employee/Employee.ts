import { Component, Prop, Vue } from 'vue-property-decorator';
import { Worker } from '@/models/Worker';

@Component
export default class Employee extends Vue {
  @Prop() readonly worker!: Worker;
}
