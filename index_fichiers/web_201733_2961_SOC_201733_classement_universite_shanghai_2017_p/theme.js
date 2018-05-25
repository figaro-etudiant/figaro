/*
   theme pour hightCharts  (JS20150624)

*/
// Load the fonts



Highcharts.createElement('link', {
   href: 'http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
    lang : {
        decimalPoint: ",",
        loading: "Chargement...",
        months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        shortMonths: ['Jan.', 'Fév.', 'Mars', 'Avr.', 'Mai', 'juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.']
    },
    colors: [  "#ff9e0f","#3C7ACC","#BBD0E5","#B2AE9C","#D3D1C4","#81312F","#CE1515","#CE1515","#003872","#FF9900" ],
    chart: {
       backgroundColor: null,
       style: {
          fontFamily: "'PT Sans' , sans-serif"
       }
    },
    title: {
       style: {
          fontSize: '15px',
          fontWeight: 400      }

    },
    legend: {
       itemStyle: {
          fontWeight: 'bold',
          fontSize: '14px'
       }
    },
    xAxis: {
       gridLineWidth: 0,
       labels: {
          style: {
             fontSize: '12px'
          }
       }
    },
    yAxis: {
       minorTickInterval: 'auto',
       title: {
          style: {
             textTransform: 'uppercase'
          }
       },
       labels: {
          style: {
             fontSize: '13px'
          }
       }
    },
    plotOptions: {
       candlestick: {
          lineColor: '#404048'
       },
       /*Add since highchart change to 5.0 by Teatis, because the default template changed to better rendering chart*/
       series: {
         dataLabels: {
             style: {
                 fontSize: '13px'
             }
         }
     }
    },
    /*Add since highchart change to 5.0 by Teatis, because the default template changed to better rendering chart*/
    tooltip: { 
        style: {
            fontSize: '13px'
        },
        headerFormat : '<span style="font-size: 11px">{point.key}</span><br/>'
     },

    // General
    background2: '#F0F0EA'  
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);