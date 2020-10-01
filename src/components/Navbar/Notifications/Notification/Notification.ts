import { PropType } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Notification as NotificationModel } from '@/models/Notification';

@Component
export default class Notification extends Vue {
  @Prop({
    type: Object as PropType<NotificationModel>,
    required: true
  })
  private readonly notification!: NotificationModel;

  private changeState() {
    this.notification.isSeen = !this.notification.isSeen;
  }
}
