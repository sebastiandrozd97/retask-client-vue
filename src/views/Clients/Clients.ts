import { Component, Vue } from 'vue-property-decorator';
import Client from '@/components/List/Clients/Client/Client.vue';
import NewClientModal from '@/components/List/Clients/Modals/NewClientModal/NewClientModal.vue';
import clients from '@/mockData/clients.json';
import { Client as ClientModel } from '@/models/Client';

@Component({
  components: {
    Client,
    NewClientModal
  }
})
export default class Clients extends Vue {
  private get clients(): ClientModel[] {
    return clients;
  }
}
