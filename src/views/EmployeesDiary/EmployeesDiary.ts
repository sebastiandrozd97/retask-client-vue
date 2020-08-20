import { Component, Vue } from 'vue-property-decorator';
import Workday from '@/components/EmployeesDiary/Workday/Workday.vue';
import NewWorkdayModal from '@/components/EmployeesDiary/Modals/NewWorkdayModal/NewWorkdayModal.vue';
import workdays from '@/mockData/workdays.json';
import { WorkingDay } from '@/models/WorkingDay';

@Component({
  components: {
    Workday,
    NewWorkdayModal
  }
})
export default class EmployeesDiary extends Vue {
  private get workdays(): WorkingDay[][] {
    return workdays;
  }
}
