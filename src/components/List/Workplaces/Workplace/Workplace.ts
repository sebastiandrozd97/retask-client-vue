import { Component, Prop, Vue } from 'vue-property-decorator';
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
  @Prop() readonly workplace!: ConstructionSite;
}
