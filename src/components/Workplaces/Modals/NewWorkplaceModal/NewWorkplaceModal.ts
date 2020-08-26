import { Component, Vue } from 'vue-property-decorator';
import clients from '@/mockData/clients.json';

@Component
export default class NewEmployeeModal extends Vue {
  private isModalClosed = true;

  private newWorkpalce = {
    name: '',
    city: '',
    street: '',
    client: 'Wybierz klienta'
  };

  private get clients() {
    return clients;
  }

  changeModalState(): void {
    this.isModalClosed = !this.isModalClosed;
  }
}
