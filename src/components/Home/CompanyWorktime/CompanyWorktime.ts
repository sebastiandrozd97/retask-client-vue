import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import { Chart } from 'chart.js';
import { BarChartData } from '@/models/BarChartData';

@Component
export default class CompanyWorktime extends Vue {
  @Prop() readonly chartData!: BarChartData[];
  @Ref() readonly chartCanvas!: HTMLCanvasElement;

  private allWorktimes = this.chartData.map(obj => obj.value);
  private isMonthly = true;
  private labels: string[] | number[] = [];
  private values: number[] = [];

  private get chart() {
    const chartContext = this.chartCanvas.getContext('2d');

    if (!chartContext || !this.chartData) {
      return null;
    }

    return new Chart(chartContext, {
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
    this.isMonthly = true;
    this.labels = this.chartData.map(obj => obj.month).slice(-12);
    this.values = this.allWorktimes.slice(-12);
    this.chart;
  }

  private setYearly() {
    this.isMonthly = false;
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
    this.chart;
  }

  mounted() {
    this.setMonthly();
  }
}
