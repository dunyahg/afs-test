import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const data = {
  labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  datasets: [
    {
       label: 'Order charts',
      lineTension: 0.5,
      fill:true,
      backgroundColor: '#c0e1f4',
      borderColor: '#2D9CDB',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#2D9CDB',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#2D9CDB',
      pointHoverBorderColor: '#2D9CDB',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      
      data: [16, 12, 6, 9, 12, 3, 9]
    }
  ]
};

export default data