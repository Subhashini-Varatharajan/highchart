import { Component } from '@angular/core';
import * as HighCharts from 'highcharts'
import { DataserviceService } from '../dataservice.service';
import  More from 'highcharts/highcharts-more';
More(HighCharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(HighCharts);
import Exporting from 'highcharts/modules/exporting';
Exporting(HighCharts);
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
    plotShadow: false,
    type: 'pie',
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
   
      depth: 45,
    
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
  
},
credits:{
   enabled:false
  },
}
}

