import { Client } from '@/models/Client';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class EditClientModal extends Vue {
  @Prop() client!: Client;

  private isEditModalClosed = true;

  @Watch('isEditModalClosed')
  onModalOpen(val: boolean) {
    if (!val) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'scroll';
  }
}
