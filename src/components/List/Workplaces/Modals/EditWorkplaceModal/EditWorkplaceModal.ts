import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { PropType } from 'vue';
import clients from '@/mockData/clients.json';
import { Workplace } from '@/models/Workplace';

@Component
export default class EditWorkplaceModal extends Vue {
  @Prop({
    type: Object as PropType<Workplace>,
    required: true
  })
  private workplace!: Workplace;

  private get clients() {
    return clients;
  }

  private isEditModalClosed = true;

  @Watch('isEditModalClosed')
  onModalOpen(val: boolean) {
    if (!val) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'visible';
  }
}
