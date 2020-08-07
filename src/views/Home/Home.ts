import { Component, Vue } from 'vue-property-decorator';
import Top from '@/components/Home/Top/Top.vue';
import MonthlyWorkTime from '@/components/Home/MonthlyWorkTime/MonthlyWorkTime.vue';
import HourDistribution from '@/components/Home/HourDistribution/HourDistribution.vue';
import barData from '@/mockData/barChart.json';
import pieData from '@/mockData/pieChart.json';

@Component({
  components: {
    Top,
    MonthlyWorkTime,
    HourDistribution
  }
})
export default class Home extends Vue {
  get data() {
    return { barData, pieData };
  }
}
