import { GoogleChartsModule } from 'angular-google-charts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { PriceChartComponent } from './cpms/price-chart/price-chart.component';
import { TransactionChartComponent } from './cpms/transaction-chart/transaction-chart.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { ContactListComponent } from './cpms/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cpms/contact-preview/contact-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    PriceChartComponent,
    TransactionChartComponent,
    ContactpageComponent,
    ContactListComponent,
    ContactPreviewComponent,
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
