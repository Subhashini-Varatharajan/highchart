import { Component } from '@angular/core';
import * as HighCharts from 'highcharts'
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent {
   constructor(public ser:DataserviceService){}
  highcharts= HighCharts;
  chartOptions:any= {   
     chart: {
        type: "spline"  
        // pie,bar
     },
     plotOptions : {
      area: {
         fillOpacity: 0.1 
      }
   },
   credits:{
      enabled:false
     },
     title: {
        text: "Column Chart"
     },
    //  subtitle: {
    //     text: "Source: WorldClimate.com"
    //  },
     colors:['#0076E1','#DB65AD','#00AAA5'],
   
     xAxis:{
        categories:this.ser.categories
     },
     yAxis: {          
        title:{
           text:"Sales"
        } 
     },
     tooltip: {
        valuePrefix:" $",
      
backgroundcolor:'#333333',

borderRadius:20,
     },
     series: this.ser.stackeddata
  };
}



