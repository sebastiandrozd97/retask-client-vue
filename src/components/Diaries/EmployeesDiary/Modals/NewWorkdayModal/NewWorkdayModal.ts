import workplaces from '@/mockData/workplaces.json';
import { Workplace } from '@/models/Workplace';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NewWorkdayModal extends Vue {
  private isModalClosed = true;

  newWork = {
    date: '',
    workingFrom: '',
    workingTo: '',
    worktime: 0,
    workplace: '',
    workDone: '',
    additionalInfo: ''
  };

  changeModalState(): void {
    this.isModalClosed = !this.isModalClosed;
  }

  getTimes() {
    // implement better solution

    const timeInterval = 15;
    const times: string[] = [];
    let initialTime = 0;

    for (let i = 0; initialTime < 24 * 60; i++) {
      const hours = Math.floor(initialTime / 60);
      const minutes = initialTime % 60;
      times[i] = ('0' + (hours % 24)).slice(-2) + ':' + ('0' + minutes).slice(-2);
      initialTime = initialTime + timeInterval;
    }

    return times;
  }

  addWork() {
    // TODO: finish function
  }

  get workplaces(): Workplace[] {
    return workplaces;
  }
}
