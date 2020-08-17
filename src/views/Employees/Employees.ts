import { Component, Vue } from 'vue-property-decorator';
import EmployeesList from '@/components/Employees/EmployeesList/EmployeesList.vue';

@Component({
  components: {
    EmployeesList
  }
})
export default class Employees extends Vue {}
