import { Component } from '@angular/core';
import * as HighCharts from 'highcharts'
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-lineareachart',
  templateUrl: './lineareachart.component.html',
  styleUrls: ['./lineareachart.component.css']
})
export class LineareachartComponent {
  constructor(public ser:DataserviceService){}
  highcharts= HighCharts;
  chartOptions: any = {
    chart: {
      type: 'area',
    },
    title: {
      text: '',
      align: 'left',
    },
    xAxis: {
      categories: this.ser.categories
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Sales',
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
   
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
    },
    colors:['#0076E1','#EA5F82','#FFA384'],
    credits:{
      enabled:false
     },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,

        },
      },
    },
    series: this.ser.stackeddata
  }
}















