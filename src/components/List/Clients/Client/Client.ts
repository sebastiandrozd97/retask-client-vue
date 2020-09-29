import { Component, Prop, Vue } from 'vue-property-decorator';
import EditClientModal from '@/components/List/Clients/Modals/EditClientModal/EditClientModal.vue';
import DeleteClientModal from '@/components/List/Clients/Modals/DeleteClientModal/DeleteClientModal.vue';
import { Client as ClientModel } from '@/models/Client';

@Component({
  components: {
    EditClientModal,
    DeleteClientModal
  }
})
export default class Client extends Vue {
  @Prop() readonly client!: ClientModel;
}
