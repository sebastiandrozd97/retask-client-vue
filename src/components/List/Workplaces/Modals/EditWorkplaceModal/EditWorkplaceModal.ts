import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { PropType } from 'vue';
import { Workplace } from '@/models/Workplace';
import axios from 'axios';
import { Client } from '@/models/Client';

@Component
export default class EditWorkplaceModal extends Vue {
  @Prop({
    type: Object as PropType<Workplace>,
    required: true
  })
  private workplace!: Workplace;

  private isEditModalClosed = true;
  private clients: Client[] = [];

  private async getClients(): Promise<Client[]> {
    try {
      const request = await axios.get(`${process.env.VUE_APP_API_URL}/clients`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
      });

      return request.data;
    } catch (error) {
      console.log(error);
      return this.clients;
    }
  }

  async created() {
    this.clients = await this.getClients();
  }

  @Watch('isEditModalClosed')
  onModalOpen(val: boolean) {
    if (!val) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'visible';
  }
}
