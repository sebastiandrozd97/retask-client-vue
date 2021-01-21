import { Component, Watch, Prop, Vue } from 'vue-property-decorator';
import { Worker } from '@/models/Worker';
import { PropType } from 'vue';
import axios from 'axios';

@Component
export default class DeleteEmployeeModal extends Vue {
  @Prop({
    type: Object as PropType<Worker>,
    required: true
  })
  worker!: Worker;

  private isDeleteModalClosed = true;

  private async deleteWorker(): Promise<void> {
    if (this.worker.id) {
      this.worker.isHired = false;

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
          console.log(error.request);
          console.log(error.message);
        });
    }
  }

  @Watch('isDeleteModalClosed')
  onModalOpen(val: boolean) {
    if (!val) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'visible';
  }
}
