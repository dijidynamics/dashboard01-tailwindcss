import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid
} from 'recharts';

const serviceLevelData = [
      { month: 'March', inbound: 82, outbound: 62 },
  { month: 'April', inbound: 72, outbound: 82 },
  { month: 'May', inbound: 92, outbound: 88 },
  { month: 'June', inbound: 95, outbound: 90 },
  { month: 'July', inbound: 98, outbound: 94 },
];

const ServiceLevelChart = () => {
  return (
    <div className='bg-white p-4 rounded-md  mt-6'>
      <h2 className='text-lg font-semibold mb-4'>Service Level (Last 5 Months)</h2>
      <ResponsiveContainer width='100%' height={250}>
        <BarChart data={serviceLevelData}>
          <CartesianGrid strokeDasharray='3 3' stroke="#e5e7eb" strokeWidth={0.5} />
          <XAxis dataKey='month' axisLine={false} tickLine={false} />
          <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tickFormatter={(val) => `${val}%`} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          <Bar dataKey='inbound' fill='#3b82f6' name='Inbound' barSize={10} radius={[4, 4, 0, 0]} />
          <Bar dataKey='outbound' fill='#10b981' name='Outbound' barSize={10} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ServiceLevelChart;
