import { Component, Vue } from 'vue-property-decorator';
import Top from '@/components/Home/Top/Top.vue';
import CompanyWorktime from '@/components/Home/CompanyWorktime/CompanyWorktime.vue';
import HourDistribution from '@/components/Home/HourDistribution/HourDistribution.vue';
import ActiveWorkplaces from '@/components/Home/ActiveWorkplaces/ActiveWorkplaces.vue';
import Worktime from '@/components/Home/Worktime/Worktime.vue';
import GoTo from '@/components/Home/GoTo/GoTo.vue';
import barData from '@/mockData/barChart.json';
import pieData from '@/mockData/pieChart.json';
import workplaces from '@/mockData/workplaces.json';
import workers from '@/mockData/workers.json';
import { PieChartData } from '@/models/PieChartData';
import { BarChartData } from '@/models/BarChartData';
import { Worker } from '@/models/Worker';
import { Workplace } from '@/models/Workplace';

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
  private get barData(): BarChartData[] {
    return barData;
  }

  private get pieData(): PieChartData[] {
    return pieData;
  }

  private get workplaces(): Workplace[] {
    return workplaces;
  }

  private get workers(): Worker[] {
    return workers;
  }
}
