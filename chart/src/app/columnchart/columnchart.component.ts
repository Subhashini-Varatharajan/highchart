import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-columnchart',
  templateUrl: './columnchart.component.html',
  styleUrls: ['./columnchart.component.css']
})
export class ColumnchartComponent {
   constructor(public ser:DataserviceService){}
  highcharts= HighCharts;
  chartOptions:any= {   
     chart: {
        type: "column"  
     },
     title: {
        text: "Bar Chart"
     },
   
     colors:['#0076E1'],
   
     xAxis:{
        categories:this.ser.categories
     },
     yAxis: {          
        title:{
           text:"sales"
        } 
     },
     tooltip: {
        valuePrefix:" $",
      
backgroundcolor:'#333333',

borderRadius:20,
     },
     series: this.ser.series
  };
}




