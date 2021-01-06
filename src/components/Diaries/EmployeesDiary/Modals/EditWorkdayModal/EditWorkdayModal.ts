import { Workday as WorkdayModel } from '@/models/Workday';
import { PropType } from 'vue';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Workplace } from '@/models/Workplace';
import { times } from '@/utils/GetTimeRange';
import axios from 'axios';

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

  editWork() {
    // TODO: finish function
  }

  async created() {
    this.workplaces = await this.getWorkplaces();
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
