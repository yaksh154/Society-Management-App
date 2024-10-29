import { useState } from 'react';
import { Line } from 'react-chartjs-2';


function TotalBalanceChart() {
  const [selectedRange, setSelectedRange] = useState('Last month');

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Balance',
        data: [10, 15, 25, 20, 30, 35, 30, 40, 45, 30, 35, 50],
        fill: false,
        backgroundColor: '#6B75FF',
        borderColor: '#6B75FF',
        pointBackgroundColor: '#6B75FF',
        pointBorderColor: '#6B75FF',
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#6B7280' },
      },
      x: {
        ticks: { color: '#6B7280' },
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Total Balance</h2>
        <div className="relative">
          <select
            className="bg-gray-100 text-gray-800 p-2 rounded-lg outline-none"
            onChange={(e) => setSelectedRange(e.target.value)}
            value={selectedRange}
          >
            <option>Last week</option>
            <option>Last month</option>
            <option>Last year</option>
          </select>
        </div>
      </div>
      <div className="">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default TotalBalanceChart;