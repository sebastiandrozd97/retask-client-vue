import { Component, Vue } from 'vue-property-decorator';
import Workday from '@/components/Diaries/EmployeesDiary/Workday/Workday.vue';
import NewWorkdayModal from '@/components/Diaries/EmployeesDiary/Modals/NewWorkdayModal/NewWorkdayModal.vue';
import FilterWorkdayModal from '@/components/Diaries/EmployeesDiary/Modals/FilterWorkdayModal/FilterWorkdayModal.vue';
import { Workday as WorkdayModel } from '@/models/Workday';
import axios from 'axios';
import _, { Dictionary } from 'underscore';

@Component({
  components: {
    Workday,
    NewWorkdayModal,
    FilterWorkdayModal
  }
})
export default class EmployeesDiary extends Vue {
  private workdays: Dictionary<WorkdayModel[]> = {};
  private feedback = '';

  private compareWorkdays(a: WorkdayModel, b: WorkdayModel) {
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;

    return 0;
  }

  private async getWorkdays(): Promise<Dictionary<WorkdayModel[]>> {
    try {
      const request = await axios.get(`${process.env.VUE_APP_API_URL}/workdays/${this.$route.params.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
      });

      return _.groupBy(request.data.sort(this.compareWorkdays), 'date');
    } catch (error) {
      this.feedback = error;
      return this.workdays;
    }
  }

  async created() {
    this.workdays = await this.getWorkdays();
  }
}
