import workplaces from '@/mockData/workplaces.json';
import years from '@/mockData/years.json';
import { months } from '@/helpers/months';
import { Component, Vue } from 'vue-property-decorator';
import { Month } from '@/models/Month';

@Component
export default class FilterWorkdayModal extends Vue {
  private isFilterModalClosed = true;

  changeModalState(): void {
    this.isFilterModalClosed = !this.isFilterModalClosed;
  }

  get workplaces(): string[] {
    return workplaces;
  }

  get years(): number[] {
    return years;
  }

  get months(): Month[] {
    return months;
  }

  filterWorks() {
    // TODO: finish function
  }
}
