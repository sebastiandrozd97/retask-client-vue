import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import { PropType } from 'vue';
import { Worker } from '@/models/Worker';

@Component
export default class Worktime extends Vue {
  @Prop({
    type: Array as PropType<Worker[]>,
    required: true
  })
  readonly workers!: Worker[];
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
    return this.hiredWorkers.length / this.itemsPerPage;
  }

  private get hiredWorkers() {
    return this.workers.filter(worker => {
      if (worker.isHired) return worker;
    });
  }

  private get filteredWorkers(): Worker[] {
    return this.hiredWorkers.filter((worker, index) => {
      if (index < this.page * this.itemsPerPage && index >= this.page * this.itemsPerPage - this.itemsPerPage)
        return worker;
    });
  }
}
