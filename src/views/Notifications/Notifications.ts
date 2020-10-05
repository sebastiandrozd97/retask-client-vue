import { Component, Vue } from 'vue-property-decorator';
import Notification from '@/components/List/Notifications/Notification/Notification.vue';
import notifications from '@/mockData/notifications.json';
import { Notification as NotificationModel } from '@/models/Notification';

@Component({
  components: {
    Notification
  }
})
export default class Notifications extends Vue {
  private get notifications(): NotificationModel[] {
    return notifications;
  }

  private compareNotifications(a: NotificationModel, b: NotificationModel) {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;

    return 0;
  }

  private get sortedNotifications(): NotificationModel[] {
    return this.notifications.sort(this.compareNotifications);
  }
}
