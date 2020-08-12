import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import { Employee } from '@/models/Employee';

@Component
export default class Worktime extends Vue {
  @Prop() readonly employees!: Employee[];
  @Ref() readonly listContainer!: HTMLDivElement;

  private page = 1;
  private itemsPerPage = 4;

  private previousPage(): void {
    if (this.page > 1) this.page -= 1;
  }

  private nextPage(): void {
    if (this.page < this.maxPage) this.page += 1;
  }

  private get maxPage() {
    return this.employees.length / this.itemsPerPage;
  }

  private compareEmployees(a: Employee, b: Employee) {
    if (a.worktime > b.worktime) return -1;
    if (a.worktime < b.worktime) return 1;

    return 0;
  }

  private get filteredEmployees(): Employee[] {
    this.employees.sort(this.compareEmployees);
    return this.employees.filter((employee, index) => {
      if (index < this.page * this.itemsPerPage && index >= this.page * this.itemsPerPage - this.itemsPerPage)
        return employee;
    });
  }
}
