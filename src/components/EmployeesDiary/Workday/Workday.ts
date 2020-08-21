import { Component, Prop, Vue } from 'vue-property-decorator';
import EditWorkdayModal from '@/components/EmployeesDiary/Modals/EditWorkdayModal/EditWorkdayModal.vue';
import DeleteWorkdayModal from '@/components/EmployeesDiary/Modals/DeleteWorkdayModal/DeleteWorkdayModal.vue';
import { Workday as WorkdayModel } from '@/models/Workday';
import moment from 'moment';

@Component({
  components: {
    EditWorkdayModal,
    DeleteWorkdayModal
  }
})
export default class Workday extends Vue {
  @Prop() readonly workday!: WorkdayModel[];

  private date = moment(this.workday[0].date).format('DD.MM');
}
