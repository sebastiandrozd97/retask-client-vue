import { Client } from '@/models/Client';
import { PropType } from 'vue';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { Workplace } from '@/models/Workplace';

@Component
export default class EditClientModal extends Vue {
  @Prop({
    type: Object as PropType<Client>,
    required: true
  })
  client!: Client;

  private isEditModalClosed = true;

  private async updateClient(): Promise<void> {
    if (this.client.firstName) {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/clients/${this.client.id}`,
          method: 'put',
          headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
          data: this.client
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
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
