import { Component, Prop, Vue } from 'vue-property-decorator';
import { PropType } from 'vue';
import EditEmployeeModal from '@/components/List/Employees/Modals/EditEmployeeModal/EditEmployeeModal.vue';
import DeleteEmployeeModal from '@/components/List/Employees/Modals/DeleteEmployeeModal/DeleteEmployeeModal.vue';
import { Worker } from '@/models/Worker';

@Component({
  components: {
    EditEmployeeModal,
    DeleteEmployeeModal
  }
})
export default class Employee extends Vue {
  @Prop({
    type: Object as PropType<Worker>,
    required: true
  })
  readonly worker!: Worker;
}
