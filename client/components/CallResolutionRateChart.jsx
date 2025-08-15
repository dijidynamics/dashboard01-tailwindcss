import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const resolutionData = [
  { week: 'W1', rate: 30 },
  { week: 'W2', rate: 45 },
  { week: 'W3', rate: 35 },
  { week: 'W4', rate: 50 },
];

const CallResolutionRateChart = () => {
  return (
      <div className="bg-white p-4 rounded-2xl shadow w-full">
      <h2 className="text-lg font-semibold mb-2">Call Resolution Rate Over Time</h2>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={resolutionData}>
          <defs>
            <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="rate" stroke="#10b981" fillOpacity={1} fill="url(#colorRate)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CallResolutionRateChart
