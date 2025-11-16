import React from 'react';
import iconReaction from '../assets/images/icon-reaction.svg';
import iconMemory from '../assets/images/icon-memory.svg';
import iconVerbal from '../assets/images/icon-verbal.svg';
import iconVisual from '../assets/images/icon-visual.svg';

const imageMap = {
  'icon-reaction.svg': iconReaction,
  'icon-memory.svg': iconMemory,
  'icon-verbal.svg': iconVerbal,
  'icon-visual.svg': iconVisual,
};

const SummaryBox = ({icon, category, score, color}) => {
  const imageSrc = imageMap[icon];

  return (
    <div className={`w-full h-full max-h-full flex justify-between p-4 rounded-2xl ${color.bg}`}>
      <div className='flex gap-2  '>
        <img src={imageSrc} alt={category} />
        <h4 className={`${color.text} font-medium` }>{category}</h4>
      </div>
      <div>
        <h4 className='text-gray-500 font-medium'><span className='text-gray-800 font-bold'>{score}</span> / 100</h4>
      </div>
    </div>
  )
}

export default SummaryBox
