import { Workplace } from '@/models/Workplace';
import { Component, Watch, Vue } from 'vue-property-decorator';
import { times } from '@/utils/GetTimeRange';
import axios from 'axios';

@Component
export default class NewWorkdayModal extends Vue {
  private isModalClosed = true;
  private workplaces: Workplace[] = [];

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

  private async getWorkplaces(): Promise<Workplace[]> {
    try {
      const request = await axios.get(`${process.env.VUE_APP_API_URL}/workplaces`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
      });

      console.log(request.data);
      return request.data;
    } catch (error) {
      console.log(error);
      return this.workplaces;
    }
  }

  get times(): string[] {
    return times();
  }

  addWork() {
    // TODO: finish function
  }

  async created() {
    this.workplaces = await this.getWorkplaces();
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
