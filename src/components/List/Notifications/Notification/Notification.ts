import { Component, Prop, Vue } from 'vue-property-decorator';
import { Notification as NotificationModel } from '@/models/Notification';

@Component
export default class Notification extends Vue {
  @Prop() readonly notification!: NotificationModel;
}
