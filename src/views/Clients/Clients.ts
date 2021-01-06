import { Component, Vue } from 'vue-property-decorator';
import Client from '@/components/List/Clients/Client/Client.vue';
import NewClientModal from '@/components/List/Clients/Modals/NewClientModal/NewClientModal.vue';
import { Client as ClientModel } from '@/models/Client';
import axios from 'axios';

@Component({
  components: {
    Client,
    NewClientModal
  }
})
export default class Clients extends Vue {
  private clients: ClientModel[] = [];

  private async getClients(): Promise<ClientModel[]> {
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
}
