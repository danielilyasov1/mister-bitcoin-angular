import { GoogleChartsModule } from 'angular-google-charts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { PriceChartComponent } from './cpms/price-chart/price-chart.component';
import { TransactionChartComponent } from './cpms/transaction-chart/transaction-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    PriceChartComponent,
    TransactionChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
