import React from 'react';
import './graphView.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
        display: false
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      display: false
    },
  }
};



const salesByMonthMap = {};

const month = (weekEnding) => {
    const date = new Date(weekEnding);
    const month = date.toLocaleString('default', { month: 'short' });
    return month;
}

const GraphView = (props) => {

    props.sales.forEach((sale, i) => {
        const monthName = month(sale.weekEnding);
        salesByMonthMap[monthName] = (salesByMonthMap[monthName] || 0) + sale.retailSales;
    });

    const data = {
        datasets: 
            [{
                data: Object.values(salesByMonthMap),
                borderColor: '#46A8F6',
                backgroundColor: '#46A8F6',
            }],
            
            labels: Object.keys(salesByMonthMap)
        };

    return (
        <div className="box graphView">
            <h3>Retail Sales</h3>
            <Line options={options} data={data} />
        </div>
    );
};

export default GraphView;
