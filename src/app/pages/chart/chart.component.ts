
// import { Component, OnInit } from '@angular/core';
// import { Chart, registerables } from 'chart.js';
// import { BitcoinService } from 'src/app/services/bitcoin.service';

// Chart.register(...registerables);

// @Component({
//   selector: 'app-chart',
//   templateUrl: './chart.component.html',
//   styleUrls: ['./chart.component.scss']
// })
// export class ChartComponent implements OnInit {

//   marketPriceData: any

//   constructor(private bitcoinService: BitcoinService) { }

//   async ngOnInit(): Promise<any> {
//     let currMarketPriceData = await this.bitcoinService.getMarketPrice().toPromise()
//     this.marketPriceData = currMarketPriceData
//     let {values} = this.marketPriceData
  
//     const myChart = new Chart("myChart", {
//       type: 'line',
//       data: {

//           labels: values.map((item:any) =>
//           new Date(item.x * 1000).toLocaleDateString()
//         ),
//           datasets: [{
//               label: this.marketPriceData.name,
//               data: values.map((item:any) => item.y),
//               backgroundColor:
//                   'rgba(255, 99, 132, 0.2)',
//               borderWidth: 1
//           }]
//       },
//       options: {
//           scales: {
//               y: {
//                   beginAtZero: true
//               }
//           }
//       }
//   });
//   }

// }

import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GoogleChartModel } from '../../models/googleChart.model';

@Component({
    selector: 'chart',
    templateUrl: './chart.component.html',
    // styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {

    marketChart = new GoogleChartModel();
    transactionsChart = new GoogleChartModel();
    @Input() marketData: any = [];
    @Input() marketTableTitle: any;
    @Input() transactionsData: any = [];
    @Input() transactionsTableTitle: any;

    constructor() { }

    ngOnInit(): void {
        this.marketChart.data = this.marketData;
        this.marketChart.title = this.marketTableTitle;
        this.transactionsChart.data = this.transactionsData;
        this.transactionsChart.title = this.transactionsTableTitle;
    }

    ngOnChanges(): void {
        this.marketChart.data = this.marketData;
        this.marketChart.title = this.marketTableTitle;
        this.transactionsChart.data = this.transactionsData;
        this.transactionsChart.title = this.transactionsTableTitle;
    }
}
