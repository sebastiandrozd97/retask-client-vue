import { Component, Prop, Vue } from 'vue-property-decorator';
import { Employee } from '@/models/Employee';

@Component
export default class Worktime extends Vue {
  @Prop() readonly employees!: Employee[];
  private page = 1;
  private itemsPerPage = 4;

  private previousPage(): void {
    if (this.maxPage / this.itemsPerPage < this.page) this.page -= 1;
  }

  private nextPage(): void {
    if (this.maxPage > this.page) this.page += 1;
  }

  private get maxPage() {
    return this.employees.length / this.itemsPerPage;
  }

  compareEmployees(a: Employee, b: Employee) {
    let comparison = 0;
    if (a.worktime > b.worktime) {
      comparison = 1;
    } else if (a.worktime < b.worktime) {
      comparison = -1;
    }
    return comparison * -1;
  }

  private get filteredEmployees(): Employee[] {
    this.employees.sort(this.compareEmployees);
    return this.employees.filter((employee, index) => {
      if (index < this.page * this.itemsPerPage && index >= this.page * this.itemsPerPage - this.itemsPerPage)
        return employee;
    });
  }
}
