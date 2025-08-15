import React from 'react';

const agents = [
  { name: 'Jonathan', status: 'Available', shift: '9am-6pm' },
  { name: 'Sharma', status: 'On Break', shift: '10am-7pm' },
  { name: 'Michael ', status: 'Offline', shift: '8am-5pm' },
  { name: 'James Tan', status: 'Available', shift: '9am-6pm' },
  { name: 'Sam', status: 'Available', shift: '9am-6pm' }
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Available':
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
          <i className='bx bx-check-circle text-green-500 text-base'></i>
          {status}
        </span>
      );
    case 'On Break':
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full">
          <i className='bx bx-coffee text-yellow-500 text-base'></i>
          {status}
        </span>
      );
    case 'Offline':
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">
          <i className='bx bx-power-off text-gray-500 text-base'></i>
          {status}
        </span>
      );
    default:
      return status;
  }
};

const AgentAvailability = () => {
  return (
    <div className="p-1">
      <h2 className="text-xl font-bold mb-4">Agent Availability</h2>
      {/* 👉 Table for desktop */}
      <div className="hidden lg:block">
        <table className="min-w-full table-auto border border-[#f4f4f4]">
          <thead>
            <tr className="bg-[#fafafa] text-left text-sm font-semibold text-gray-700">
              <th className="border border-[#f4f4f4] px-1 py-2"><i className='bx bx-user'></i> Name</th>
              <th className="border border-[#f4f4f4] px-1 py-2"><i className='bx bx-wifi'></i> Status </th>
              <th className="border border-[#f4f4f4] px-1 py-2"><i className='bx bx-time'></i> Shift</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, index) => (
              <tr key={index} className="text-md hover:bg-gray-50 transition-all">
                <td className="border border-[#f4f4f4] text-sm px-1 py-2">{agent.name}</td>
                <td className="border border-[#f4f4f4] px-1 py-2">{getStatusBadge(agent.status)}</td>
                <td className="border border-[#f4f4f4] text-sm px-1 py-2">{agent.shift}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 👉 Card style for mobile */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
        {agents.map((agent, index) => (
          <div key={index} className="bg-white p-4 shadow border rounded-md">
            <div className="font-semibold text-gray-800 mb-1">{agent.name}</div>
            <div className="mb-1">{getStatusBadge(agent.status)}</div>
            <div className="text-sm text-gray-600">
              <i className='bx bx-time mr-1'></i> {agent.shift}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentAvailability;
