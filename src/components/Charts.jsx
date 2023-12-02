import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Charts = ({ value_1, value_2, value_3, value_4, value_5, chart_data }) => {
    const options = {
        scales: {
            x: {
                ticks: {
                    color: 'white'
                }
            },
            y: {
                ticks: {
                    color: 'white'
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        },
        responsive: true,
    };

    const labels = ['category_6', 'category_7', 'category_8', 'category_9', 'category_10'];

    const data = {
        labels,
        datasets: [
            {
                data: [value_1, value_2, value_3, value_4, value_5],
                backgroundColor: 'rgb(240, 193, 240)',
            },
        ],
    };
    return (
        <>
            <div className="chart">
                <Bar options={options} data={data} />
            </div>
        </>
    )
}

export default Charts
