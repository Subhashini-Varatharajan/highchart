import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }
  categories = [
    'AWS',
    'Azure',
    'GCP',
    'OCI',
    'VMWare'
  ];
  // series = [
  //   {
  //      name: 'Cloud Account 1',
  //      data: [55, 110, 150,220,320]
  //   }
  //  ];
   data = [
    {
      name:'AWS',
      y:50.9,
      
    },
    {
      name:'Azure',
      y:30.9
    },
    {
      name:'VMWare',
      y:23.9
    },
    {
      name:'GCP',
      y:5.8
    },
    {
      name:'OCI',
      y:3.9
    }
   
    
 ];
 stackeddata =[
 {
  name: 'Cloud Account 1',
  data: [3, 5, 10, 13],
 
  
},

{
  name: 'Cloud Account2',
  data: [14, 8, 8, 12],
  
},
{
  name: 'Cloud Account 3 ',
  data: [0, 2, 6, 3],
 
},


];
treedata= [
  {
     name: 'AWS',
     value: 6,
     color:'#0076E1' 
          }, 
  {
     name: 'GCP',
     value: 6,
     color:'#EA5F82'
  }, 
  {
     name: 'Azure',
     value: 4,
     color:'#FFA384'
  }, 
  {
     name: 'OCI',
     value: 3,
     color:'#00AAA5'
  }, 
  {
     name: 'VMware',
     value: 2,
     color:'#8C7444'
  }, 
 
  ];
  heatmapdata= [
    [0, 0, 10,], 
  [0, 1, 19], 
  [0, 2, 8],
  [0, 3, 24],
  [0, 4, 67],
  [1, 0, 92],
  [1, 1, 58],
  [1, 2, 78],
  [1, 3, 117],
  [1, 4, 48], 
  [2, 0, 35],
  [2, 1, 15],
  [2, 2, 123],
  [2, 3, 64],
  [2, 4, 52],
  [3, 0, 72],
  [3, 1, 132],
  [3, 2, 114],
  [3, 3, 19],
  [3, 4, 16],
  [4, 0, 38],
  [4, 1, 5],
  [4, 2, 8],
  [4, 3, 117],
  [4, 4, 115],
  [5, 0, 88],
  [5, 1, 32],
  [5, 2, 12],
  [5, 3, 6],
  [5, 4, 120],
  [6, 0, 13],
  [6, 1, 44],
  [6, 2, 88], 
  [6, 3, 98],
  [6, 4, 96],
  [7, 0, 31],
  [7, 1, 1],
  [7, 2, 82],
  [7, 3, 32],
  [7, 4, 30], 
  [8, 0, 85],
  [8, 1, 97],
  [8, 2, 123],
  [8, 3, 64],
  [8, 4, 84],
  [9, 0, 47],
  [9, 1, 114], 
  [9, 2, 31],
  [9, 3, 48],
  [9, 4, 91]];
  account=[
'AWS',
'Azure',
'GCP',
'OCI',
'VMWare',

];
drilldown = [
          {
            name: "AWS",
            id: "AWS",
            data: [
              [
                "Account 1",
                35
                
                     
              ],
              [
                "Account 2",
                78
              ],
              [
                "Account 3",
                21
              ],
              [
                "Account 4",
                63
              ],
              [
                "Account 5",
                13
              ],
             
              
            ],
            dataSorting:{
              enabled:true
           }
          },
          {
            name: "Azure",
            id: "Azure",
            data: [
              [
                "Account 1",
                12
              ],
              [
                "Account 2",
                7.36
              ],
              [
                "Account 3",
                35
              ],
              [
                "Account 4",
                51
              ],
              [
                "Account 5",
                83
              ],
              [
                "Account 6",
                42
              ],
              [
                "Account 7",
                23
              ],
            
            ],
            dataSorting:{
              enabled:true
           }
          },
          {
            name: "GCP",
            id: "GCP",
            data: [
              [
               "Account 1",
                62
              ],
              [
                "Account 2",
                91
              ],
              [
                "Account 3",
                49
              ],
              [
                "Account 4",
                29
              ],
              [
                "Account 5",
                20
              ],
              [
                "Account 6 ",
                12
              ],
             
            ],
            dataSorting:{
              enabled:true
           }
          },
          {
            name: "OCI",
            id: "OCI",
            data: [
              [
                "Account 1",
                33
              ],
              [
                "Account 2",
                96
              ],
              [
                "Account 3",
                66
              ],
              [
                "Account 4",
                23
              ],
             
             
            ],
            dataSorting:{
              enabled:true
           }
          },
         
            
          
        ];
        drilldowndata = [
                    {
                      name: "AWS",
                      y: 63.06,
                      drilldown: "AWS"
                    },
                    {
                      name: "Azure",
                      y: 19.84,
                      drilldown: "Azure"
                    },
                    {
                      name: "GCP",
                      y: 4.18,
                      drilldown: "GCP"
                    },
                    {
                      name: "OCI",
                      y: 4.12,
                      drilldown: "OCI"
                    },
                    {
                      name: "VMWare",
                      y: 2.33,
                      drilldown: "VMWare"
                    },
                    
                  ]
      
}
