import { Component, Prop, Vue, Ref } from 'vue-property-decorator';
import { Chart } from 'chart.js';
import Workplace from '@/models/Workplace';

@Component
export default class HourDistribution extends Vue {
  @Prop() readonly data!: Workplace[];
  @Ref() readonly chartCanvas!: HTMLCanvasElement;

  workplaces = this.data.map(obj => obj.name);
  values = this.data.map(obj => obj.value);

  get chart(): Chart | null {
    const chartContext = this.chartCanvas.getContext('2d');

    if (!chartContext || !this.data) {
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
            backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB', '#B735EC']
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  mounted() {
    this.chart;
  }
}
