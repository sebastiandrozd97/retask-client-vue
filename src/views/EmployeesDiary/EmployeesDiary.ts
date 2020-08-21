import { Component, Vue } from 'vue-property-decorator';
import Workday from '@/components/EmployeesDiary/Workday/Workday.vue';
import NewWorkdayModal from '@/components/EmployeesDiary/Modals/NewWorkdayModal/NewWorkdayModal.vue';
import FilterWorkdayModal from '@/components/EmployeesDiary/Modals/FilterWorkdayModal/FilterWorkdayModal.vue';
import workdays from '@/mockData/workdays.json';
import { Workday as WorkdayModel } from '@/models/Workday';

@Component({
  components: {
    Workday,
    NewWorkdayModal,
    FilterWorkdayModal
  }
})
export default class EmployeesDiary extends Vue {
  private get workdays(): WorkdayModel[][] {
    return workdays;
  }
}
