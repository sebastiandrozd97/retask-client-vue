import { Client } from '@/models/Client';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class EditClientModal extends Vue {
  @Prop() client!: Client;

  private isEditModalClosed = true;
}
