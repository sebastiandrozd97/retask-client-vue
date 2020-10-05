import { Workday as WorkdayModel } from '@/models/Workday';
import workplaces from '@/mockData/workplaces.json';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Workplace } from '@/models/Workplace';
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

  get workplaces(): Workplace[] {
    return workplaces;
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
