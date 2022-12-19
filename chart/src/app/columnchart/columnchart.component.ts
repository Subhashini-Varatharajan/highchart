import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';
import { DataserviceService } from '../dataservice.service';
import  More from 'highcharts/highcharts-more';
More(HighCharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(HighCharts);
import Exporting from 'highcharts/modules/exporting';
Exporting(HighCharts);
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
      //   categories:this.ser.categories
      type: 'category'
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
   //   series: this.ser.drilldowndata,
   series: [
      {
        name: "Cloud Account",
        colorByPoint: true,
      data: this.ser.drilldowndata
      }],

    drilldown: {
      breadcrumbs: {
        position: {
          align: 'right'
        }
      },
      series: this.ser.drilldown,
        
    

    },
    credits:{
      enabled:false
     },
    
  };
}




