import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const channelData = [
  { name: 'Phone', value: 400 },
  { name: 'Email', value: 300 },
  { name: 'Chat', value: 200 },
];
const COLORS = ['#3b82f6', '#607d8b', '#10b981'];
const CallVolumeByChannel = () => {
  return (
      <div className="bg-white p-4 rounded-2xl shadow w-full">
      <h2 className="text-lg font-semibold mb-2">Call Volume by Channel</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={channelData}
            cx="50%"
            cy="50%"
            outerRadius={60}
            dataKey="value"
            label
          >
            {channelData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CallVolumeByChannel
