import { Component, Vue } from 'vue-property-decorator';
import Top from '@/components/Home/Top/Top.vue';
import CompanyWorktime from '@/components/Home/CompanyWorktime/CompanyWorktime.vue';
import HourDistribution from '@/components/Home/HourDistribution/HourDistribution.vue';
import ActiveWorkplaces from '@/components/Home/ActiveWorkplaces/ActiveWorkplaces.vue';
import Worktime from '@/components/Home/Worktime/Worktime.vue';
import GoTo from '@/components/Home/GoTo/GoTo.vue';
import barData from '@/mockData/barChart.json';
import pieData from '@/mockData/pieChart.json';
import workers from '@/mockData/workers.json';
import { PieChartData } from '@/models/PieChartData';
import { BarChartData } from '@/models/BarChartData';
import { Worker } from '@/models/Worker';
import { Workplace } from '@/models/Workplace';
import axios from 'axios';

@Component({
  components: {
    Top,
    CompanyWorktime,
    HourDistribution,
    ActiveWorkplaces,
    Worktime,
    GoTo
  }
})
export default class Home extends Vue {
  private workplaces: Workplace[] = [];

  private get barData(): BarChartData[] {
    return barData;
  }

  private get pieData(): PieChartData[] {
    return pieData;
  }

  private get workers(): Worker[] {
    return workers;
  }

  private async getWorkplaces(): Promise<Workplace[]> {
    try {
      const request = await axios.get(`${process.env.VUE_APP_API_URL}/workplaces`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
      });

      return request.data;
    } catch (error) {
      console.log(error);
      return this.workplaces;
    }
  }

  async created() {
    this.workplaces = await this.getWorkplaces();
  }
}
