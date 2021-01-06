import years from '@/mockData/years.json';
import { months } from '@/helpers/months';
import { Component, Watch, Vue } from 'vue-property-decorator';
import { Month } from '@/models/Month';
import { Workplace } from '@/models/Workplace';
import axios from 'axios';

@Component
export default class FilterWorkdayModal extends Vue {
  private isFilterModalClosed = true;
  private workplaces: Workplace[] = [];

  changeModalState(): void {
    this.isFilterModalClosed = !this.isFilterModalClosed;
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

  get years(): number[] {
    return years;
  }

  get months(): Month[] {
    return months;
  }

  filterWorks() {
    // TODO: finish function
  }

  async created() {
    this.workplaces = await this.getWorkplaces();
  }

  @Watch('isFilterModalClosed')
  onModalOpen(val: boolean) {
    if (!val) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'visible';
  }
}
