import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import { Chart } from 'chart.js';
import { ChartData } from '@/models/ChartData';
import { months } from '@/helpers/months';

@Component
export default class MonthlyWorktime extends Vue {
  @Prop() readonly chartData!: ChartData[];
  @Ref() readonly chart!: HTMLCanvasElement;

  private chartValues = this.chartData.map(obj => obj.value);

  private get Chart() {
    const chartContext = this.chart.getContext('2d');

    if (!chartContext || !this.chartData) {
      return null;
    }

    return new Chart(chartContext, {
      type: 'horizontalBar',
      data: {
        labels: months,
        datasets: [
          {
            label: '',
            data: this.chartValues,
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

  mounted() {
    this.Chart;
  }
}
