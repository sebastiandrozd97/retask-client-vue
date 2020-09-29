import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NewClientModal extends Vue {
  private isModalClosed = true;

  changeModalState(): void {
    this.isModalClosed = !this.isModalClosed;
  }
}
