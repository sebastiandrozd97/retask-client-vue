import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import { Worker } from '@/models/Worker';

@Component
export default class Worktime extends Vue {
  @Prop() readonly workers!: Worker[];
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
    return this.workersWithValidWorktime.length / this.itemsPerPage;
  }

  private get workersWithValidWorktime() {
    return this.workers.filter(worker => {
      if (worker.worktime > 0) return worker;
    });
  }

  private compareWorkers(a: Worker, b: Worker) {
    if (a.worktime > b.worktime) return -1;
    if (a.worktime < b.worktime) return 1;

    return 0;
  }

  private get filteredWorkers(): Worker[] {
    this.workersWithValidWorktime.sort(this.compareWorkers);
    return this.workersWithValidWorktime.filter((worker, index) => {
      if (index < this.page * this.itemsPerPage && index >= this.page * this.itemsPerPage - this.itemsPerPage)
        return worker;
    });
  }
}
