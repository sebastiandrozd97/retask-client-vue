import { Component, Vue } from 'vue-property-decorator';
import Workplace from '@/components/List/Workplaces/Workplace/Workplace.vue';
import NewWorkplaceModal from '@/components/List/Workplaces/Modals/NewWorkplaceModal/NewWorkplaceModal.vue';
import { Workplace as ConstructionSite } from '@/models/Workplace';
import axios from 'axios';

@Component({
  components: {
    Workplace,
    NewWorkplaceModal
  }
})
export default class Workplaces extends Vue {
  private workplaces: ConstructionSite[] = [];

  private async getWorkplaces(): Promise<ConstructionSite[]> {
    try {
      const request = await axios.get(`${process.env.VUE_APP_API_URL}/workplaces`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
      });

      console.log(request.data);
      return request.data;
    } catch (error) {
      console.log(error);
      return this.workplaces;
    }
  }

  private compareWorkers(a: ConstructionSite, b: ConstructionSite) {
    if (a.isOpen > b.isOpen) return -1;
    if (a.isOpen < b.isOpen) return 1;

    return 0;
  }

  private get filteredWorkplaces(): ConstructionSite[] {
    return this.workplaces.sort(this.compareWorkers);
  }

  async created() {
    this.workplaces = await this.getWorkplaces();
  }
}
