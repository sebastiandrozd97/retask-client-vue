import { Component, Prop, Vue } from 'vue-property-decorator';
import EditWorkdayModal from '@/components/EmployeesDiary/Modals/EditWorkdayModal/EditWorkdayModal.vue';
import DeleteWorkdayModal from '@/components/EmployeesDiary/Modals/DeleteWorkdayModal/DeleteWorkdayModal.vue';
import { WorkingDay } from '@/models/WorkingDay';

@Component({
  components: {
    EditWorkdayModal,
    DeleteWorkdayModal
  }
})
export default class Workday extends Vue {
  @Prop() readonly workingDay!: WorkingDay;

  EditModalState = false;
  DeleteModalState = false;
}
