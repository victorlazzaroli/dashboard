import {Component, inject, OnInit} from '@angular/core';
import {StoreService} from "../../../../shared/services/store.service";
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  private readonly storeService = inject(StoreService);
  // PolarArea
  public polarAreaChartLabels: string[] = [];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [] }
  ];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: true,
  };

  spinner: boolean = true;

  chartData$ = this.storeService.getChart(this.storeService.storeId);

  ngOnInit() {
    this.chartData$.subscribe(result => {
      result.forEach( el => {
        this.spinner = false;
        this.polarAreaChartLabels.push(el.category);
        this.polarAreaChartDatasets[0].data.push(el.numberOfProducts);
      })
    })
  }


}
