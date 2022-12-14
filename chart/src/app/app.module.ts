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
    MatrixchartComponent
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
