import { Component } from '@angular/core';
import * as HighCharts from 'highcharts'
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-dotchart',
  templateUrl: './dotchart.component.html',
  styleUrls: ['./dotchart.component.css']
})
export class DotchartComponent {
   constructor(public ser:DataserviceService){}
  highcharts= HighCharts;
  chartOptions :any= {         
     title : {
        text: 'Scatter plot'   
     }, 
       
     series : [{
        type: 'scatter',
        zoomType:'xy',
        name: 'Cloud Account',
        data: this.ser.data,
        color:'#0076E1' 
     }]
  };
}

