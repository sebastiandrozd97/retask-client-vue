import { Component, Prop, Vue } from 'vue-property-decorator';
import { Notification } from '@/models/Notification';

@Component
export default class Notifications extends Vue {
  @Prop() readonly notification!: Notification;
}
