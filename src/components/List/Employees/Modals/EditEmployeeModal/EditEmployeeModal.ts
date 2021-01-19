import { Worker } from '@/models/Worker';
import { PropType } from 'vue';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class EditEmployeeModal extends Vue {
  @Prop({
    type: Object as PropType<Worker>,
    required: true
  })
  worker!: Worker;

  private isEditModalClosed = true;

  private async updateWorker(): Promise<void> {
    if (this.worker.firstName) {
      axios
        .request({
          url: `${process.env.VUE_APP_API_URL}/users/${this.worker.id}`,
          method: 'put',
          headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
          data: this.worker
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
