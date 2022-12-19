import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsOrganization from "highcharts/modules/organization";
import HighchartsExporting from "highcharts/modules/exporting";

HighchartsSankey(HighCharts);
HighchartsOrganization(HighCharts);
HighchartsExporting(HighCharts);
@Component({
  selector: 'app-orgchart',
  templateUrl: './orgchart.component.html',
  styleUrls: ['./orgchart.component.css']
})
export class OrgchartComponent {
  highcharts= HighCharts;
  chartOptions:any= { 
    chart: {
      height: 600,
      
      inverted: false
    },
    title: {
      text: 'Highcharts Org Chart'
    },
    series: [{
      type: 'organization',
      name: 'Highsoft',
      keys: ['from', 'to'],
      data: [
        ['CD Cloud Enablers', 'Corestack',],
        ['Corestack', 'CEO'],
        ['CEO', 'CTO'],
        ['CEO', 'COO'],
        ['CEO', 'CSO'],
        ['CEO', 'HR'],
      
       ['CTO','Vppro'],
        // ['CSO', 'promanager1'],
        // ['CTO', 'promanager2'],
        // ['CTO', 'promanager3'],
        ['COO', 'promanager4'],
        // ['CFO', 'promanager6'],
        ['HR', 'promanager5'],


       
      ],
      levels: [{
        level: 0,
        color: '#0076E1',
      
        dataLabels: {
          color: 'black'
        },
        height: 25
      }, {
        level: 1,
        color: '#EA5F82',
        dataLabels: {
          color: 'black'
        },

        height: 15
      },
     
       
      {
        level: 2,
        color: '#FFA384'
      },
   {
        level: 4,
        color: '#00AAA5'
      }],
      nodes: [{
        id: 'CD'
      }, {
        id: ''
      }, {
        id: 'CEO',
        title: 'CEO',
      
        name: 'Ezhilarasan Natarajan',
       image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2022/06/30081411/portrett-sorthvitt.jpg',
      // image: 'https://static.thenounproject.com/png/5021412-200.png'
      }, {
        id: 'HR',
        title: 'CFO',
        name: 'Bala Vishwanath',
        // color: '#007ad0',
        image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131210/Highsoft_04045_.jpg',
     
      }, {
        id: 'CTO',
        title: 'CTO',
        name: 'Sabapathy Aarumugam',
        image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131120/Highsoft_04074_.jpg'
      }, {
        id: 'COO',
        title: 'COO',
        name: 'Krishna Kumar',
        image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg'
      }, {
        id: 'CSO',
        title: 'CSO',
        name: 'Bob Patel',
        image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131210/Highsoft_04045_.jpg'
      }, {
      }, {
        id: 'Vppro',
        name: 'Parthu Kishan',
        color:'#8C7444'
      },
      {
        id: 'promanager1',
        name: 'Krishnakumar AS',
        color:'#8C7444'
      }, {
        id: 'promanager2',
        name: 'Dinesh Maddy',
        color:'#8C7444'
      }, {
        id: 'promanager3',
        name: 'Prabhu',
        color:'#8C7444'
      },
      {
        id: 'promanager4',
        name: 'Perumal Balakrishnan',
       
        color:'#8C7444'
      }, {
        id: 'promanager5',
        name: 'Anil Kumar',
      
        color:'#8C7444'
      }, {
        id: 'promanager6',
        name: 'sathya',
        column: 5,
        color:'#8C7444'
      },
      {
        id: 'Market',
        name: 'Marketing team',
        column: 5
      }],
      colorByPoint: false,
      color: '#00AAA5',
      dataLabels: {
        color: 'white'
      },
      borderColor: 'white',
      nodeWidth: 200,
      nodeHeight: 30,
    }],
    tooltip: {
      outside: true
    },
    credits:{
      enabled:false
     },
    exporting: {
      allowHTML: true,
      sourceWidth: 800,
      sourceHeight: 600
    }
  
  }
}
