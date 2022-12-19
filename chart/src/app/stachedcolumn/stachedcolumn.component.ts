import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts'
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-stachedcolumn',
  templateUrl: './stachedcolumn.component.html',
  styleUrls: ['./stachedcolumn.component.css']
})
export class StachedcolumnComponent implements OnInit {
  arr:any;
  value:any;


  constructor(public ser:DataserviceService){
    this.arr = this.ser.stackeddata;
    this.value= this.arr.sort()
   
  }
  ngOnInit(): void {
    
  }

  
  highcharts= HighCharts;
  chartOptions: any = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Stached Column Chart',
      align: 'left',
    },
    xAxis: {
      categories:this.ser.categories
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
    // legend: {
    //   align: 'left',
    //   x: 70,
    //   verticalAlign: 'bottom',
    //   y: 70,
    //   floating: true,
     
    // },
   
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
    },

    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: false,
        },
      },
      series:{
        dataSorting:{
          enabled:true
        }
      }
    },
    credits:{
      enabled:false
     },
    colors:['#0076E1','#EA5F82','#FFA384'],
    series: this.ser.stackeddata,
   
  }
}















