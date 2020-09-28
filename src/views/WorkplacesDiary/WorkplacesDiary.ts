import { Component, Vue } from 'vue-property-decorator';
import Workday from '@/components/WorkplacesDiary/Workday/Workday.vue';
import NewWorkdayModal from '@/components/WorkplacesDiary/Modals/NewWorkdayModal/NewWorkdayModal.vue';
import FilterWorkdayModal from '@/components/WorkplacesDiary/Modals/FilterWorkdayModal/FilterWorkdayModal.vue';
import workdays from '@/mockData/workdays.json';
import { Workday as WorkdayModel } from '@/models/Workday';

@Component({
  components: {
    Workday,
    NewWorkdayModal,
    FilterWorkdayModal
  }
})
export default class WorkplacesDiary extends Vue {
  private get workdays(): WorkdayModel[][] {
    return workdays;
  }
}
