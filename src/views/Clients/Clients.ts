import { Component, Vue } from 'vue-property-decorator';
import Client from '@/components/List/Clients/Client/Client.vue';
import NewClientModal from '@/components/List/Clients/Modals/NewClientModal/NewClientModal.vue';
import { Client as ClientModel } from '@/models/Client';
import axios from 'axios';
import { Workplace } from '@/models/Workplace';

@Component({
  components: {
    Client,
    NewClientModal
  }
})
export default class Clients extends Vue {
  private clients: ClientModel[] = [];
  private workplaces: Workplace[] = [];
  private feedback = '';

  private async getWorkplaces(): Promise<Workplace[]> {
    try {
      const request = await axios.get(`${process.env.VUE_APP_API_URL}/workplaces`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
      });

      return request.data;
    } catch (error) {
      return this.workplaces;
    }
  }

  private async getClients(): Promise<ClientModel[]> {
    try {
      const request = await axios.get(`${process.env.VUE_APP_API_URL}/clients`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
      });

      return request.data;
    } catch (error) {
      this.feedback = error;
      return this.clients;
    }
  }

  async created() {
    this.clients = await this.getClients();
    this.workplaces = await this.getWorkplaces();
  }
}
