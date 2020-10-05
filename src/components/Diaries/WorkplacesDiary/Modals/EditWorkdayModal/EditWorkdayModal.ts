import { Workday as WorkdayModel } from '@/models/Workday';
import employees from '@/mockData/workers.json';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Worker } from '@/models/Worker';
import { times } from '@/utils/GetTimeRange';

@Component
export default class EditWorkdayModal extends Vue {
  @Prop() work!: WorkdayModel;

  private isEditModalClosed = true;

  get times(): string[] {
    return times();
  }

  editWork() {
    // TODO: finish function
  }

  get employees(): Worker[] {
    return employees;
  }

  @Watch('isEditModalClosed')
  onModalOpen(val: boolean) {
    if (!val) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'scroll';
  }
}
