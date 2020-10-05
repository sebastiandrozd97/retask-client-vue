import employees from '@/mockData/workers.json';
import { Worker } from '@/models/Worker';
import { Component, Watch, Vue } from 'vue-property-decorator';
import { times } from '@/utils/GetTimeRange';

@Component
export default class NewWorkdayModal extends Vue {
  private isModalClosed = true;

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

  get employees(): Worker[] {
    return employees;
  }

  @Watch('isModalClosed')
  onModalOpen(val: boolean) {
    if (!val) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'scroll';
  }
}
