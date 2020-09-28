import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DeleteEmployeeModal extends Vue {
  @Prop() readonly workId!: number;

  private isDeleteModalClosed = true;

  deleteWork() {
    this.isDeleteModalClosed = !this.isDeleteModalClosed;
  }
}
