import React from 'react';

const callresolutions = [
  { id: 1, resolution: 'Resolved', count: 1150, icon: 'bx-check-circle', color: 'text-green-600' },
  { id: 2, resolution: 'Unresolved', count: 74, icon: 'bx-error', color: 'text-red-500' },
  { id: 3, resolution: 'Escalated', count: 23, icon: 'bx-up-arrow', color: 'text-orange-500' },
  { id: 4, resolution: 'Voicemail', count: 3, icon: 'bx-voicemail', color: 'text-gray-500' }
];

const CallResolution = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-4">Call Resolution</h2>

      {callresolutions.map(item => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b border-[#f4f4f4] py-3"
        >
          <div className="flex items-center gap-3">
            <i className={`bx ${item.icon} text-xl ${item.color}`}></i>
            <span className="text-sm font-medium text-gray-800">{item.resolution}</span>
          </div>
          <span className="text-sm font-semibold text-gray-700">{item.count}</span>
        </div>
      ))}
    </div>
  );
};

export default CallResolution;
