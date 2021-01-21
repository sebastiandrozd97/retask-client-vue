import { Component, Prop, Vue } from 'vue-property-decorator';
import { PropType } from 'vue';
import EditClientModal from '@/components/List/Clients/Modals/EditClientModal/EditClientModal.vue';
import DeleteClientModal from '@/components/List/Clients/Modals/DeleteClientModal/DeleteClientModal.vue';
import { Client as ClientModel } from '@/models/Client';
import { Workplace } from '@/models/Workplace';

@Component({
  components: {
    EditClientModal,
    DeleteClientModal
  }
})
export default class Client extends Vue {
  @Prop({
    type: Object as PropType<ClientModel>,
    required: true
  })
  readonly client!: ClientModel;

  @Prop({
    type: Array as PropType<Workplace[]>,
    required: true
  })
  readonly workplaces!: Workplace[];

  private getWorkplacesCount() {
    return this.workplaces.filter(workplace => workplace.clientId === this.client.id).length;
  }
}
