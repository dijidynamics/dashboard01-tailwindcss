import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const productivityData = [
  { month: 'Jan', value: 50 },
  { month: 'Feb', value: 65 },
  { month: 'Mar', value: 70 },
  { month: 'Apr', value: 55 },
  { month: 'May', value: 75 },
  { month: 'Jun', value: 60 },
];

const AgentProductivityChart = () => {



  return (
  <div className="bg-white p-4 rounded-2xl shadow w-full">
      <h2 className="text-lg font-semibold mb-2">Agent Productivity Over Time</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={productivityData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AgentProductivityChart
