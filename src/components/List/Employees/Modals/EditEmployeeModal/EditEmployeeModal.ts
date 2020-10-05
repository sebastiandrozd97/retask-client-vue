import { Worker } from '@/models/Worker';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class EditEmployeeModal extends Vue {
  @Prop() worker!: Worker;

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
