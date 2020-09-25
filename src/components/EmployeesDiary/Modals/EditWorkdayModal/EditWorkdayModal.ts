import { Workday as WorkdayModel } from '@/models/Workday';
import workplaces from '@/mockData/workplaces.json';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Workplace } from '@/models/Workplace';

@Component
export default class EditWorkdayModal extends Vue {
  @Prop() work!: WorkdayModel;

  private isEditModalClosed = true;

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

  editWork() {
    // TODO: finish function
  }

  get workplaces(): Workplace[] {
    return workplaces;
  }
}
