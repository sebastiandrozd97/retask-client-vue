import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class DeleteEmployeeModal extends Vue {
  @Prop({
    type: Number,
    required: true
  })
  readonly workId!: number;

  private isDeleteModalClosed = true;

  deleteWork() {
    this.isDeleteModalClosed = !this.isDeleteModalClosed;
  }

  @Watch('isDeleteModalClosed')
  onModalOpen(val: boolean) {
    if (!val) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'visible';
  }
}
