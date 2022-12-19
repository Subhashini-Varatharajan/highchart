import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataserviceService } from '../dataservice.service';
import More from 'highcharts/highcharts-more';
import Tree from 'highcharts/modules/treemap';
import Heatmap from 'highcharts/modules/heatmap';
More(Highcharts);
Tree(Highcharts);
Heatmap(Highcharts);
@Component({
  selector: 'app-treechart',
  templateUrl: './treechart.component.html',
  styleUrls: ['./treechart.component.css']
})
export class TreechartComponent {

constructor(public ser:DataserviceService){}
  highcharts= Highcharts;
  chartOptions:any = {         
     title : {
        text: 'Highcharts Treemap'   
     },    
   
     colors:['#0076E1','#EA5F82','#FFA384','#00AAA5','#8C7444'],
     credits:{
      enabled:false
     },
     series : [{
        type: "treemap",
        layoutAlgorithm: 'squarified',
        data: this.ser.treedata,
      //   [
      //   {
      //      name: 'A',
      //      value: 6,
      //      color:'#0076E1'      }, 
      //   {
      //      name: 'B',
      //      value: 6,
      //      color:'#EA5F82'
      //   }, 
      //   {
      //      name: 'C',
      //      value: 4,
      //      color:'#FFA384'
      //   }, 
      //   {
      //      name: 'D',
      //      value: 3,
      //      color:'#00AAA5'
      //   }, 
      //   {
      //      name: 'E',
      //      value: 2,
      //      color:'#8C7444'
      //   }, 
      //   {
      //      name: 'F',
      //      value: 2,
      //      color:'#DB65AD'
      //   }, 
      //   {
      //      name: 'G',
      //      value: 1,
      //      color:'#DB65AD'
      //   }
      //   ]
     }]     
  };
}

