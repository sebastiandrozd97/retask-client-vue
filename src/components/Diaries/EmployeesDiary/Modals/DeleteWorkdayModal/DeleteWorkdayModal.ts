import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class DeleteEmployeeModal extends Vue {
  @Prop({
    type: Number,
    required: true
  })
  readonly workId!: number;

  private isDeleteModalClosed = true;

  private async deleteWork(): Promise<void> {
    try {
      const request = await axios.delete(`${process.env.VUE_APP_API_URL}/workdays/${this.workId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
      });

      window.location.reload();
    } catch (error) {
      console.log('bad request');
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
