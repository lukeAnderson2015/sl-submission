import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
  } from 'chart.js';
  import { Line } from "react-chartjs-2";
  import '../style/Chart.css';
  import {IChart} from '../util/types';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
  );

  ChartJS.defaults.font.family = 'Poppins';

function Chart ({data, containerClassName}: IChart) {
    return (
        <Line
            data={data}
            className={`${containerClassName} chart`}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: "Retail Sales",
                        align: 'start',
                        font: {
                            size: 16
                        }
                    }
                },
                scales: {
                    y: {
                        ticks: {
                            display: false,
                        },
                        beginAtZero: true,
                        grid: {
                            display: false,
                        },
                        border: {
                            display: false
                        }
                    },
                    x: {
                        ticks: {
                            callback(val, index): string {
                                 return (
                                    (index % 4) === 0 && typeof val === 'number' 
                                    // This nonsense is to account for the data's date values being interpreted as UTC
                                    // by JS, instead of local time which creates an entry in 2016 for 2017-01-01
                                    ? new Date(`${this.getLabelForValue(val)}T00:00:00`).toLocaleString('default', { month: 'short' }) 
                                    : ''
                                 )
                            },
                            color: '#bcbcbc'
                        },
                        grid: {
                            display: false
                        },
                    }
                }
            }}
        />
    )
}

export default Chart;