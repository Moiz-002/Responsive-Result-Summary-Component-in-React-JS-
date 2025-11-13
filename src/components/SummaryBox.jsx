import React from 'react';

const SummaryBox = ({icon, category, score, color}) => {
  return (
    <div className={`w-full h-full max-h-full flex justify-between p-4 rounded-2xl ${color.bg}`}>
      <div className='flex gap-2  '>
        <img src={icon} alt="image" />
        <h4 className={`${color.text} font-medium` }>{category}</h4>
      </div>
      <div>
        <h4 className='text-gray-500 font-medium'><span className='text-gray-800 font-bold'>{score}</span> / 100</h4>
      </div>
    </div>
  )
}

export default SummaryBox
