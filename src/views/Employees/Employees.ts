import { Component, Vue } from 'vue-property-decorator';
import Employee from '@/components/Employees/Employee/Employee.vue';
import NewEmployeeModal from '@/components/Employees/Modals/NewEmployeeModal/NewEmployeeModal.vue';
import workers from '@/mockData/workers.json';
import { Worker } from '@/models/Worker';

@Component({
  components: {
    Employee,
    NewEmployeeModal
  }
})
export default class Employees extends Vue {
  private get workers(): Worker[] {
    return workers;
  }

  private compareWorkers(a: Worker, b: Worker) {
    if (a.isEmployed > b.isEmployed) return -1;
    if (a.isEmployed < b.isEmployed) return 1;

    return 0;
  }

  private get filteredWorkers(): Worker[] {
    return this.workers.sort(this.compareWorkers);
  }
}
