import { Component, Vue } from 'vue-property-decorator';
import Workplace from '@/components/List/Workplaces/Workplace/Workplace.vue';
import NewWorkplaceModal from '@/components/List/Workplaces/Modals/NewWorkplaceModal/NewWorkplaceModal.vue';
import workplaces from '@/mockData/workplaces.json';
import { Workplace as ConstructionSite } from '@/models/Workplace';

@Component({
  components: {
    Workplace,
    NewWorkplaceModal
  }
})
export default class Workplaces extends Vue {
  private get workplaces(): ConstructionSite[] {
    return workplaces;
  }

  private compareWorkers(a: ConstructionSite, b: ConstructionSite) {
    if (a.isOpen > b.isOpen) return -1;
    if (a.isOpen < b.isOpen) return 1;

    return 0;
  }

  private get filteredWorkplaces(): ConstructionSite[] {
    return this.workplaces.sort(this.compareWorkers);
  }
}
