import { Component, Vue } from 'vue-property-decorator';
import Top from '@/components/Home/Top/Top.vue';
import MonthlyWorkTime from '@/components/Home/MonthlyWorkTime/MonthlyWorkTime.vue';
import HourDistribution from '@/components/Home/HourDistribution/HourDistribution.vue';
import ActiveWorkplaces from '@/components/Home/ActiveWorkplaces/ActiveWorkplaces.vue';
import barData from '@/mockData/barChart.json';
import pieData from '@/mockData/pieChart.json';
import ChartData from '@/models/ChartData';

@Component({
  components: {
    Top,
    MonthlyWorkTime,
    HourDistribution,
    ActiveWorkplaces
  }
})
export default class Home extends Vue {
  get barData(): ChartData[] {
    return barData;
  }

  get pieData(): ChartData[] {
    return pieData;
  }
}
