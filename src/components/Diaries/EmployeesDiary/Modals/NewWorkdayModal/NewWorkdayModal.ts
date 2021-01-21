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
    workplaceId: '',
    workerId: this.$route.params.id,
    task: '',
    additionalInfo: null
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

  private async addWork(): Promise<void> {
    if (this.newWork.workerId && this.newWork.workplaceId && this.newWork.date) {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/workdays`,
          method: 'post',
          headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
          data: this.newWork
        })
        .then(response => {
          window.location.reload();
        })
        .catch(error => console.log(error));
    } else {
      console.log('bad request');
    }
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
