import { Worker } from '@/models/Worker';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class EditEmployeeModal extends Vue {
  @Prop() worker!: Worker;

  private isEditModalClosed = true;
}
