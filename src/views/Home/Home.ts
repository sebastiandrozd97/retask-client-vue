import { Component, Vue } from 'vue-property-decorator';
import Top from '@/components/Home/Top/Top.vue';
import MonthlyWorkTime from '@/components/Home/MonthlyWorkTime/MonthlyWorkTime.vue';
import HourDistribution from '@/components/Home/HourDistribution/HourDistribution.vue';
import ActiveWorkplaces from '@/components/Home/ActiveWorkplaces/ActiveWorkplaces.vue';
import Worktime from '@/components/Home/Worktime/Worktime.vue';
import GoTo from '@/components/Home/GoTo/GoTo.vue';
import barData from '@/mockData/barChart.json';
import pieData from '@/mockData/pieChart.json';
import workplaces from '@/mockData/workplaces.json';
import employees from '@/mockData/employees.json';
import { ChartData } from '@/models/ChartData';
import { Employee } from '@/models/Employee';

@Component({
  components: {
    Top,
    MonthlyWorkTime,
    HourDistribution,
    ActiveWorkplaces,
    Worktime,
    GoTo
  }
})
export default class Home extends Vue {
  private get barData(): ChartData[] {
    return barData;
  }

  private get pieData(): ChartData[] {
    return pieData;
  }

  private get workplaces(): string[] {
    return workplaces;
  }

  private get employees(): Employee[] {
    return employees;
  }
}
