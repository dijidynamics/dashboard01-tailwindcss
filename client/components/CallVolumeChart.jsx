import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Mon', inbound: 120, outbound: 80 },
  { day: 'Tue', inbound: 150, outbound: 90 },
  { day: 'Wed', inbound: 250, outbound: 180 },
  { day: 'Thu', inbound: 200, outbound: 130 },
  { day: 'Fri', inbound: 220, outbound: 290 },
  { day: 'Sat', inbound: 180, outbound: 120 },
  { day: 'Sun', inbound: 160, outbound: 100 },
];

const CallVolumeChart = () => {
  return (
        <div className='bg-white p-4 rounded-md '>
      <h2 className='text-lg font-semibold mb-4'>Weekly Call Volume</h2>
      <ResponsiveContainer width='100%' height={250}>
        <LineChart data={data}>
     <CartesianGrid strokeDasharray='3 3' stroke="#e5e7eb" strokeWidth={0.5}  /> 
          <XAxis dataKey='day'      axisLine={false}       tickLine={false} />
          <YAxis domain={[0, 300]}  axisLine={false}       tickLine={false} />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='inbound' stroke='#3b82f6' name='Inbound Calls' />
          <Line type='monotone' dataKey='outbound' stroke='#10b981' name='Outbound Calls' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CallVolumeChart
