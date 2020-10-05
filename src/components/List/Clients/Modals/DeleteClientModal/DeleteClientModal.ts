import { Component, Watch, Vue } from 'vue-property-decorator';

@Component
export default class DeleteClientModal extends Vue {
  private isDeleteModalClosed = true;

  @Watch('isDeleteModalClosed')
  onModalOpen(val: boolean) {
    if (!val) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'scroll';
  }
}
