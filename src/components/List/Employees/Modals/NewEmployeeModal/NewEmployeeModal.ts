import { Component, Watch, Vue } from 'vue-property-decorator';

@Component
export default class NewEmployeeModal extends Vue {
  private isModalClosed = true;

  changeModalState(): void {
    this.isModalClosed = !this.isModalClosed;
  }

  @Watch('isModalClosed')
  onModalOpen(val: boolean) {
    if (!val) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'visible';
  }
}
