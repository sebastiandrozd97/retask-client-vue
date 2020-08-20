import { Worker } from '@/models/Worker';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class EditWorkdayModal extends Vue {
  @Prop() worker!: Worker;

  private isEditModalClosed = true;
}
