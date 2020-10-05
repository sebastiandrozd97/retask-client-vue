import years from '@/mockData/years.json';
import { months } from '@/helpers/months';
import { Component, Watch, Vue } from 'vue-property-decorator';
import { Month } from '@/models/Month';

@Component
export default class FilterWorkdayModal extends Vue {
  private isFilterModalClosed = true;

  changeModalState(): void {
    this.isFilterModalClosed = !this.isFilterModalClosed;
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

  @Watch('isFilterModalClosed')
  onModalOpen(val: boolean) {
    if (!val) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'scroll';
  }
}
