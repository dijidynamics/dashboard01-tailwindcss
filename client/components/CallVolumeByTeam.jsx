import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const teamData = [
  { team: 'Team A', phone: 240, email: 120 },
  { team: 'Team B', phone: 390, email: 180 },
  { team: 'Team C', phone: 180, email: 210 },
];

const CallVolumeByTeam = () => {
  return (
 <div className="bg-white p-4 rounded-2xl shadow w-full">
      <h2 className="text-lg font-semibold mb-2">Call Volume by Team (Phone & Email)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
          data={teamData}
          margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="team" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="phone" fill="#3b82f6" name="Phone Calls" barSize={18} />
          <Bar dataKey="email" fill="#10b981" name="Email Calls" barSize={18} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CallVolumeByTeam
