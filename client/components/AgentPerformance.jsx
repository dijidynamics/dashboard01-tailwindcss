import React from 'react';

const agents = [
  { id: 1, name: 'Jonathan', photo: '/agents/john.jpg', calls: 120, talkTime: '3h 40m' },
  { id: 2, name: 'Sharma', photo: '/agents/priya.jpg', calls: 118, talkTime: '2h 55m' },
  { id: 3, name: 'Michael', photo: '/agents/michael.jpg', calls: 90, talkTime: '2h 20m' }
];

const AgentPerformance = () => {
  return (
    <div className="p-2">
      <h2 className="text-xl font-bold mb-2">Agent Performance</h2>

   
      <div className="hidden lg:block">
        {/* Header */}
        <div className="bg-gray-100 text-sm px-4 py-2 rounded-md font-semibold text-gray-700 flex">
          <div className="w-[10%]">Photo</div>
          <div className="w-[40%]">Agent</div>
          <div className="w-[20%]">Calls</div>
          <div className="w-[30%]">Talk Time</div>
        </div>

        {/* Rows */}
        <div className="space-y-2 mt-2">
          {agents.map(agent => (
            <div key={agent.id} className="bg-white rounded-lg p-2 shadow flex items-center gap-3">
              <img src={agent.photo} alt={agent.name} className="h-10 w-10 rounded-full object-cover" />
              <div className="w-[40%] text-sm font-medium text-gray-800">{agent.name}</div>
              <div className="w-[20%] text-gray-700">{agent.calls}</div>
              <div className="w-[30%] text-gray-700 text-sm">{agent.talkTime}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 👉 Mobile Layout (Card Style) */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
        {agents.map(agent => (
          <div key={agent.id} className="bg-white p-4 rounded-lg shadow border">
            <div className="flex items-center gap-3 mb-2">
              <img src={agent.photo} alt={agent.name} className="h-10 w-10 rounded-full object-cover" />
              <h3 className="font-medium text-gray-800 text-sm">{agent.name}</h3>
            </div>
            <div className="text-sm text-gray-600 mb-1">
              <strong>Calls:</strong> {agent.calls}
            </div>
            <div className="text-sm text-gray-600">
              <strong>Talk Time:</strong> {agent.talkTime}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentPerformance;
