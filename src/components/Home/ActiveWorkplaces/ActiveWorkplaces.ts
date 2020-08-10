import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ActiveWorkplaces extends Vue {
  @Prop() readonly workplaces!: string[];
  private page = 1;
  private maxPage = this.workplaces.length / 5;

  private previousPage(): void {
    if (this.workplaces.length / 5 < this.page) this.page -= 1;
  }

  private nextPage(): void {
    if (this.workplaces.length / 5 > this.page) this.page += 1;
  }

  private get filteredWorkplaces(): string[] {
    console.log(this.maxPage);
    return this.workplaces.filter((workplace, index) => {
      if (index < this.page * 5 && index >= this.page * 5 - 5) return workplace;
    });
  }
}
