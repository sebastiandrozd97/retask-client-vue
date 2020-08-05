import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import { Chart } from 'chart.js';
import Workplace from '@/models/Workplace';

@Component
export default class MonthlyWorkTime extends Vue {
  @Prop() readonly data!: Workplace[];
  @Ref() readonly chart!: HTMLCanvasElement;

  workplaces = this.data.map(obj => obj.name);
  values = this.data.map(obj => obj.value);

  get Chart() {
    const chartContext = this.chart.getContext('2d');

    if (!chartContext || !this.data) {
      return null;
    }

    return new Chart(chartContext, {
      type: 'horizontalBar',
      data: {
        labels: this.workplaces,
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

  mounted() {
    this.Chart;
  }
}
