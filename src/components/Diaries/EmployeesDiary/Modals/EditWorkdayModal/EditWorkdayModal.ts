import { Workday as WorkdayModel } from '@/models/Workday';
import { PropType } from 'vue';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Workplace } from '@/models/Workplace';
import { times } from '@/utils/GetTimeRange';
import axios from 'axios';
import moment from 'moment';

@Component
export default class EditWorkdayModal extends Vue {
  @Prop({
    type: Object as PropType<WorkdayModel>,
    required: true
  })
  work!: WorkdayModel;

  private isEditModalClosed = true;
  private workplaces: Workplace[] = [];

  get times(): string[] {
    return times();
  }

  private formatDate(): void {
    if (this.work.date) {
      this.work.date = moment(this.work.date).format('YYYY-MM-DD');
    }
  }

  private async getWorkplaces(): Promise<Workplace[]> {
    try {
      const request = await axios.get(`${process.env.VUE_APP_API_URL}/workplaces`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
      });

      return request.data;
    } catch (error) {
      console.log(error);
      return this.workplaces;
    }
  }

  private async updateWorkday(): Promise<void> {
    if (this.work.date && this.work.workplace.id && this.work.worker.id) {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/workdays/${this.work.id}`,
          method: 'put',
          headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
          data: {
            task: this.work.task,
            date: this.work.date,
            workingFrom: this.work.workingFrom,
            workingTo: this.work.workingTo,
            worktime: this.work.worktime,
            additionalInfo: this.work.additionalInfo,
            workerId: this.work.worker.id,
            workplaceId: this.work.workplace.id
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  async created() {
    this.workplaces = await this.getWorkplaces();
    this.formatDate();
  }

  @Watch('isEditModalClosed')
  onModalOpen(val: boolean) {
    if (!val) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'visible';
  }
}
