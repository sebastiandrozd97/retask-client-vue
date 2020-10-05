import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import { PropType } from 'vue';
import { Chart } from 'chart.js';
import { PieChartData } from '@/models/PieChartData';
import { colors } from '@/helpers/colors.ts';

@Component
export default class HourDistribution extends Vue {
  @Prop({
    type: Array as PropType<PieChartData[]>,
    required: true
  })
  readonly chartData!: PieChartData[];
  @Ref() readonly chartCanvas!: HTMLCanvasElement;

  private workplaces = this.chartData.map(obj => obj.name);
  private values = this.chartData.map(obj => obj.value);

  private get chart(): Chart | null {
    const chartContext = this.chartCanvas.getContext('2d');

    if (!chartContext || !this.chartData) {
      return null;
    }
    return new Chart(chartContext, {
      type: 'pie',
      data: {
        labels: this.workplaces,
        datasets: [
          {
            label: '',
            data: this.values,
            backgroundColor: colors
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom'
        }
      }
    });
  }

  mounted() {
    this.chart;
  }
}
