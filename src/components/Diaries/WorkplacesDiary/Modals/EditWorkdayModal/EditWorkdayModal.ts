import { Workday as WorkdayModel } from '@/models/Workday';
import { PropType } from 'vue';
import axios from 'axios';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Worker } from '@/models/Worker';
import { times } from '@/utils/GetTimeRange';

@Component
export default class EditWorkdayModal extends Vue {
  @Prop({
    type: Object as PropType<WorkdayModel>,
    required: true
  })
  work!: WorkdayModel;

  private isEditModalClosed = true;
  private workers: Worker[] = [];
  private feedback = '';

  get times(): string[] {
    return times();
  }

  editWork() {
    // TODO: finish function
  }

  private async getWorkers(): Promise<Worker[]> {
    try {
      const request = await axios.get(`${process.env.VUE_APP_API_URL}/users`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
      });

      return request.data;
    } catch (error) {
      this.feedback = error;
      return this.workers;
    }
  }

  async created() {
    this.workers = await this.getWorkers();
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
