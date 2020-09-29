import { Component, Prop, Vue } from 'vue-property-decorator';
import clients from '@/mockData/clients.json';
import { Workplace } from '@/models/Workplace';

@Component
export default class EditWorkplaceModal extends Vue {
  @Prop() private workplace!: Workplace;

  private get clients() {
    return clients;
  }

  private isEditModalClosed = true;
}
