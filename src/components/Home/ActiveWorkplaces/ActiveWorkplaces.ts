import { Workplace } from '@/models/Workplace';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ActiveWorkplaces extends Vue {
  @Prop() readonly workplaces!: Workplace[];
  private page = 1;
  private itemsPerPage = 5;

  private previousPage(): void {
    if (this.page > 1) this.page -= 1;
  }

  private nextPage(): void {
    if (this.page < this.maxPage) this.page += 1;
  }

  private get maxPage() {
    return this.workplaces.length / this.itemsPerPage;
  }

  private get activeWorkplaces(): Workplace[] {
    return this.workplaces.filter(workplace => {
      if (workplace.isOpen) return workplace;
    });
  }

  private get filteredWorkplaces(): Workplace[] {
    return this.activeWorkplaces.filter((workplace, index) => {
      if (index < this.page * this.itemsPerPage && index >= this.page * this.itemsPerPage - this.itemsPerPage)
        return workplace;
    });
  }
}
