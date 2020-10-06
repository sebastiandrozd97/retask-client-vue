import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import { PropType } from 'vue';
import { Chart } from 'chart.js';
import { BarChartData } from '@/models/BarChartData';

export enum ChartType {
  MONTHLY,
  YEARLY
}

@Component
export default class CompanyWorktime extends Vue {
  @Prop({
    type: Array as PropType<BarChartData[]>,
    required: true
  })
  readonly chartData!: BarChartData[];

  @Ref() readonly chartCanvas!: HTMLCanvasElement;

  private chartTypes = ChartType;
  private allWorktimes = this.chartData.map(obj => obj.value);
  private chartType = this.chartTypes.MONTHLY;
  private labels: string[] | number[] = [];
  private values: number[] = [];
  private chart: Chart | null = null;

  private initChart() {
    const chartContext = this.chartCanvas.getContext('2d');

    if (!chartContext || !this.chartData) {
      this.chart = null;
      return;
    }

    this.chart = new Chart(chartContext, {
      type: 'horizontalBar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: '',
            data: this.values,
            backgroundColor: 'rgba(0, 104, 255, 0.4)'
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                mirror: true,
                fontColor: 'black',
                fontFamily: "'Montserrat', sans-serif",
                beginAtZero: true,
                min: 0,
                padding: -10,
                fontStyle: '600'
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                fontColor: 'black',
                fontFamily: "'Montserrat', sans-serif",
                min: 0,
                fontStyle: '600'
              }
            }
          ]
        }
      }
    });
  }

  private setMonthly() {
    this.chartType = this.chartTypes.MONTHLY;
    this.labels = this.chartData.map(obj => obj.month).slice(-12);
    this.values = this.allWorktimes.slice(-12);
    this.chart?.destroy();
    this.initChart();
  }

  private setYearly() {
    this.chartType = this.chartTypes.YEARLY;
    this.labels = [...new Set(this.chartData.map(obj => obj.year))];
    this.values = [];
    this.labels.forEach(year => {
      this.values.push(
        this.chartData
          .filter(worktime => worktime.year === year)
          .map(obj => obj.value)
          .reduce((a, b) => a + b, 0)
      );
    });
    this.chart?.destroy();
    this.initChart();
  }

  mounted() {
    this.setMonthly();
  }
}
