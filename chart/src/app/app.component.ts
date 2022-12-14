import { Component } from '@angular/core';
import * as HighCharts from 'highcharts'
import { DataserviceService } from './dataservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(public ser:DataserviceService){}
  title = 'chart';
  highcharts= HighCharts;
  chartOptions:any= {   
     chart: {
        type: "bar"  
      
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
           text:"Sales"
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


