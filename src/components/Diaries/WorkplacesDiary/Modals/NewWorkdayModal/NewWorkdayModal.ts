import axios from 'axios';
import { Worker } from '@/models/Worker';
import { Component, Watch, Vue } from 'vue-property-decorator';
import { times } from '@/utils/GetTimeRange';

@Component
export default class NewWorkdayModal extends Vue {
  private isModalClosed = true;
  private workers: Worker[] = [];
  private feedback = '';

  newWork = {
    date: '',
    workingFrom: '',
    workingTo: '',
    worktime: 0,
    workplace: '',
    workDone: '',
    additionalInfo: ''
  };

  changeModalState(): void {
    this.isModalClosed = !this.isModalClosed;
  }

  get times(): string[] {
    return times();
  }

  addWork() {
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

  @Watch('isModalClosed')
  onModalOpen(val: boolean) {
    if (!val) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'visible';
  }
}
