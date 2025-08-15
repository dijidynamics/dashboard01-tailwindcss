import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const pieData = [
  { name: 'Inbound', value: 680 },
  { name: 'Outbound', value: 320 },
];

const COLORS = ['#3b82f6', '#10b981']; // Blue and Green

const CallDistributionPie = () => {
  return (
    <div className='bg-white p-4 rounded-md mt-6'>
      <h2 className='text-lg font-semibold mb-4'>Call Distribution</h2>
      <ResponsiveContainer width='100%' height={250}>
        <PieChart>
          <Pie
            data={pieData}
            cx='50%'
            cy='50%'
            labelLine={false}
            outerRadius={100}
            innerRadius={80} // 👈 Makes it a donut
            dataKey='value'
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} Calls`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CallDistributionPie;