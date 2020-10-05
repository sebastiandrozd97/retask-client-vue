import { Component, Prop, Vue } from 'vue-property-decorator';
import { PropType } from 'vue';
import EditWorkdayModal from '@/components/Diaries/WorkplacesDiary/Modals/EditWorkdayModal/EditWorkdayModal.vue';
import DeleteWorkdayModal from '@/components/Diaries/WorkplacesDiary/Modals/DeleteWorkdayModal/DeleteWorkdayModal.vue';
import { Workday as WorkdayModel } from '@/models/Workday';
import moment from 'moment';

@Component({
  components: {
    EditWorkdayModal,
    DeleteWorkdayModal
  }
})
export default class Workday extends Vue {
  @Prop({
    type: Array as PropType<WorkdayModel[]>,
    required: true
  })
  readonly workday!: WorkdayModel[];

  get date() {
    if (this.workday) {
      return moment(this.workday[0].date).format('DD.MM');
    }
  }
}
