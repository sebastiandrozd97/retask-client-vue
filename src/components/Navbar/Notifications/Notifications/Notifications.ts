import { Component, Vue } from 'vue-property-decorator';
import notifications from '@/mockData/notifications.json';
import { Notification as NotificationModel } from '@/models/Notification';
import Notification from '@/components/Navbar/Notifications/Notification/Notification.vue';
import moment from 'moment';

@Component({
  components: {
    Notification
  }
})
export default class Notifications extends Vue {
  private isNotificationBoxOpen = false;

  private get unseenNotifications(): number {
    return notifications.map(obj => obj.isSeen).filter(notification => !notification).length;
  }

  private get notifications(): NotificationModel[] {
    return notifications;
  }

  private getNotificationDate(date: string): string {
    moment.locale('pl');
    return moment(date, 'DD.MM.YYYY hh:mm').fromNow();
  }
}
