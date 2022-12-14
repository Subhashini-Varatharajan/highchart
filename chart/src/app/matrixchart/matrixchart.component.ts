import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';
import More from 'highcharts/highcharts-more';
import Tree from 'highcharts/modules/treemap';
import Heatmap from 'highcharts/modules/heatmap';
import { DataserviceService } from '../dataservice.service';
More(HighCharts);
Tree(HighCharts);
Heatmap(HighCharts);

@Component({
  selector: 'app-matrixchart',
  templateUrl: './matrixchart.component.html',
  styleUrls: ['./matrixchart.component.css']
})
export class MatrixchartComponent {
  constructor(public ser:DataserviceService){}
 
  highcharts= HighCharts;

  chartOptions: any  = {   
  chart: {
    type: 'heatmap',
    marginTop: 40,
    marginBottom: 80,
    plotBorderWidth: 1
  },
  title: {
    text: 'Heat Map'
  },
  xAxis: {
    categories: this.ser.categories
  },

  yAxis: {
  categories: this.ser.account,
    title: null,
    reversed: true
  },
  // colors:['#0076E1','#EA5F82','#FFA384','#00AAA5','#8C7444'],
  colorAxis: {
    // min: 0,
    // minColor: '#FFFFFF',
    // maxColor: Highcharts.getOptions().colors[0]
    // colors:['#0076E1','#EA5F82','#FFA384','#00AAA5','#8C7444'],
  },


  legend: {
    align: 'right',
    layout: 'vertical',
    margin: 0,
    verticalAlign: 'top',
    y: 25,
    symbolHeight: 280
  },


  series: [{
    name: 'Heap Chart',
    borderWidth: 1,
    data:this.ser.heatmapdata,
   
    // dataLabels: {
    //   enabled: false,
  
    // }
  }],

  responsive: {
  }
}

}


