import React from 'react';

const feedbackData = [
  { name: "Larissa Tan", rating: 5, comment: "Very satisfied with the help." },
  { name: "Kenneth Lim", rating: 4, comment: "Quick response and polite agent." },
  { name: "Daniel Tan", rating: 2, comment: "Had to call twice." }
];

const CustomerFeedback = () => {
  return (
    <div className="p-2">
      <h2 className="text-xl font-bold mb-4">Customer Feedback</h2>
      {feedbackData.map((fb, index) => (
        <div key={index} className="bg-gray-100 p-4 mb-2 rounded-md">
          <p className="font-semibold text-md">{fb.name} - ⭐ {fb.rating}/5</p>
          <p className="text-gray-600 text-sm">{fb.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
