import { Component } from '@angular/core';
import * as HighCharts from 'highcharts'
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-donot',
  templateUrl: './donot.component.html',
  styleUrls: ['./donot.component.css']
})
export class DonotComponent {
   constructor(public ser:DataserviceService){}
  highcharts= HighCharts;
  chartOptions :any= {  
  chart : {
    plotBorderWidth: null,
    plotShadow: false
 },
 title : {
    text: 'Donot Chart'   
 },
 tooltip : {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
 },
 colors:['#0076E1','#EA5F82','#FFA384','#00AAA5','#8C7444'],

 plotOptions : {
  pie: {
     allowPointSelect: true,
     cursor: 'pointer',
     innerSize: '50%'  ,
     dataLabels: {
        enabled: false           
     },

     showInLegend: true
  }
},
 series : [{
    type: 'pie',
    name: 'Browser share',
    data: this.ser.data
 }]
};
}

