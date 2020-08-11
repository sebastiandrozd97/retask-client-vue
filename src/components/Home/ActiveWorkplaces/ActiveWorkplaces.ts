import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ActiveWorkplaces extends Vue {
  @Prop() readonly workplaces!: string[];
  private page = 1;
  private itemsPerPage = 5;

  private previousPage(): void {
    if (this.maxPage / this.itemsPerPage < this.page) this.page -= 1;
  }

  private nextPage(): void {
    if (this.maxPage > this.page) this.page += 1;
  }

  private get maxPage() {
    return this.workplaces.length / this.itemsPerPage;
  }

  private get filteredWorkplaces(): string[] {
    return this.workplaces.filter((workplace, index) => {
      if (index < this.page * this.itemsPerPage && index >= this.page * this.itemsPerPage - this.itemsPerPage)
        return workplace;
    });
  }
}
