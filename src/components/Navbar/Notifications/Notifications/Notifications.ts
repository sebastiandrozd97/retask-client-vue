import { Component, Vue } from 'vue-property-decorator';
import notificationsRaw from '@/mockData/notifications.json';
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
  private notifications: NotificationModel[] = notificationsRaw;

  private get unseenNotifications(): number {
    return this.notifications.filter(notification => !notification.isSeen).length;
  }

  private getNotificationDate(date: string): string {
    moment.locale('pl');
    return moment(date, 'DD.MM.YYYY hh:mm').fromNow();
  }
}
