import { Component, Vue } from 'vue-property-decorator';
import Employee from '@/components/List/Employees/Employee/Employee.vue';
import NewEmployeeModal from '@/components/List/Employees/Modals/NewEmployeeModal/NewEmployeeModal.vue';
import axios from 'axios';
import { Worker } from '@/models/Worker';

@Component({
  components: {
    Employee,
    NewEmployeeModal
  }
})
export default class Employees extends Vue {
  private workers: Worker[] = [];

  private async getWorkers(): Promise<Worker[]> {
    try {
      const request = await axios.get(`${process.env.VUE_APP_API_URL}/users`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
      });

      return request.data.sort(this.compareWorkers);
    } catch (error) {
      return this.workers;
    }
  }

  private compareWorkers(a: Worker, b: Worker) {
    if (a.isHired > b.isHired) return -1;
    if (a.isHired < b.isHired) return 1;

    return 0;
  }

  async created() {
    this.workers = await this.getWorkers();
  }
}
