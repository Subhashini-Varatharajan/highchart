import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarchartComponent } from './barchart/barchart.component';
import { ColumnchartComponent } from './columnchart/columnchart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonotComponent } from './donot/donot.component';
import { DotchartComponent } from './dotchart/dotchart.component';
import { LineareachartComponent } from './lineareachart/lineareachart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { MatrixchartComponent } from './matrixchart/matrixchart.component';
import { OrgchartComponent } from './orgchart/orgchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { StachedbarComponent } from './stachedbar/stachedbar.component';
import { StachedcolumnComponent } from './stachedcolumn/stachedcolumn.component';
import { TreechartComponent } from './treechart/treechart.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'columnchart',component:ColumnchartComponent},
  {path:'donutchart',component:DonotComponent},
  {path:'dotchart',component:DotchartComponent},
  {path:'linechart',component:LinechartComponent},
  {path:'lineareachart',component:LineareachartComponent},
  {path:'treechart',component:TreechartComponent},
  {path:'stachedcolumn',component:StachedcolumnComponent},
  {path:'stachedbar',component:StachedbarComponent},
  {path:'heapchart',component:MatrixchartComponent},
  {path:'piechart',component:PiechartComponent},
  {path:'orgchart',component:OrgchartComponent},
  {path:'barchart',component:BarchartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
