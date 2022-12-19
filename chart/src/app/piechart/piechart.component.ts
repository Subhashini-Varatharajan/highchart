import { Component } from '@angular/core';
import * as HighCharts from 'highcharts'
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
   constructor(public ser:DataserviceService){}
  highcharts= HighCharts;

  chartOptions: any  = {   
      chart : {
         plotBorderWidth: null,
         plotShadow: false,
         type:'pie',
      },
      title : {
         text: 'Pie Chart'   
      },
      credits:{
         enabled:false
        },
      colors:['#0076E1','#EA5F82','#FFA384','#00AAA5','#8C7444'],
      tooltip : {
         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions : {
         pie: {
            allowPointSelect: true,
            cursor: 'pointer',
      
            dataLabels: {
               enabled: false           
            },
      
            showInLegend: true
         }
      },
      series : [{
         type: 'pie',
         name: 'Browser share',
     //     data: this.ser.drilldowndata
     //  }],
      data: this.ser.drilldowndata,
     }],
     
     drilldown: {
       series: 
         
          this.ser.drilldown
       
     }
     }
     }
     
     
