import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColumnchartComponent } from './columnchart/columnchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { StachedcolumnComponent } from './stachedcolumn/stachedcolumn.component';
import { StachedbarComponent } from './stachedbar/stachedbar.component';
import { LinechartComponent } from './linechart/linechart.component';
import { DotchartComponent } from './dotchart/dotchart.component';
import { LineareachartComponent } from './lineareachart/lineareachart.component';
import { DonotComponent } from './donot/donot.component';
import { TreechartComponent } from './treechart/treechart.component';
import { MatrixchartComponent } from './matrixchart/matrixchart.component';
import { OrgchartComponent } from './orgchart/orgchart.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NavigationHeadComponent } from './navigation-head/navigation-head.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { BarchartComponent } from './barchart/barchart.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnchartComponent,
    PiechartComponent,
    StachedcolumnComponent,
    StachedbarComponent,
    LinechartComponent,
    DotchartComponent,
    LineareachartComponent,
    DonotComponent,
    TreechartComponent,
    MatrixchartComponent,
    OrgchartComponent,
    DashboardComponent,

    NavigationHeadComponent,
    AsideMenuComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
