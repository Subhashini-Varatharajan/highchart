import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-stachedbar',
  templateUrl: './stachedbar.component.html',
  styleUrls: ['./stachedbar.component.css']
})
export class StachedbarComponent {
  constructor(public ser:DataserviceService){}
  highcharts= HighCharts;
  chartOptions: any = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Stached Bar Chart',
      align: 'left',
    },
    xAxis: {
      categories: this.ser.categories
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Count trophies',
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          // color: ( // theme
          //     Highcharts.defaultOptions.title.style &&
          //     Highcharts.defaultOptions.title.style.color
          // ) || 'gray',
          textOutline: 'none',
        },
      },
    },
    legend: {
      reversed: false
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    credits:{
      enabled:false
     },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
    },
    colors:['#0076E1','#EA5F82','#FFA384'],
    series: this.ser.stackeddata
  }
}


 
  
 

  











