import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnChanges, AfterViewInit {
  @Input() monthlyEMI: number;
  @Input() totalAmountPayable: number;
  @Input() interestComponent: number;
  @ViewChild('doughnutChart') doughnutChart: ElementRef;

  chart: any;

  ngOnChanges() {
    if (this.chart) {
      this.updateChart();
    }
  }

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart(this.doughnutChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Principal', 'Interest'],
        datasets: [
          {
            data: [
              this.totalAmountPayable - this.interestComponent,
              this.interestComponent,
            ],
            backgroundColor: ['#4caf50', '#03a9f4'],
          },
        ],
      },
      options: {
        responsive: true,
        rotation: -90,
        circumference: 180,
        cutout: '50%',
      },
    });
  }

  updateChart() {
    this.chart.data.datasets[0].data = [
      this.totalAmountPayable - this.interestComponent,
      this.interestComponent,
    ];
    this.chart.update();
  }
}
