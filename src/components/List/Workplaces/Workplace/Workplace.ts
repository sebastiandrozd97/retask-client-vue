import { Component, Prop, Vue } from 'vue-property-decorator';
import { PropType } from 'vue';
import EditWorkplaceModal from '@/components/List/Workplaces/Modals/EditWorkplaceModal/EditWorkplaceModal.vue';
import DeleteWorkplaceModal from '@/components/List/Workplaces/Modals/DeleteWorkplaceModal/DeleteWorkplaceModal.vue';
import { Workplace as ConstructionSite } from '@/models/Workplace';

@Component({
  components: {
    EditWorkplaceModal,
    DeleteWorkplaceModal
  }
})
export default class Workplace extends Vue {
  @Prop({
    type: Object as PropType<ConstructionSite>,
    required: true
  })
  readonly workplace!: ConstructionSite;
}
