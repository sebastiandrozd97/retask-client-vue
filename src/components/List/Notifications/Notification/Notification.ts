import { Component, Prop, Vue } from 'vue-property-decorator';
import { PropType } from 'vue';
import { Notification as NotificationModel } from '@/models/Notification';

@Component
export default class Notification extends Vue {
  @Prop({
    type: Object as PropType<NotificationModel>,
    required: true
  })
  readonly notification!: NotificationModel;
}
