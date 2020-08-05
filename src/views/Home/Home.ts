import { Component, Prop, Vue } from 'vue-property-decorator';
import Top from '@/components/Home/Top/Top.vue';
import MonthlyWorkTime from '@/components/Home/MonthlyWorkTime/MonthlyWorkTime.vue';
import data from '@/mockData/barChart.json';

@Component({
  components: {
    Top,
    MonthlyWorkTime
  }
})
export default class Home extends Vue {
  data = data;
}
