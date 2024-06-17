import React from 'react';
import CountUp from 'react-countup';

const SocialCard = ({ src, followers }) => {
  return (
    <div className='flex items-center justify-end w-28 md:w-32 border-2 border-white rounded-full'>
      <div className='px-1 text-2xl font-bold text-white'>
        <CountUp end={followers} duration={3.75} /> K+
      </div>
      <img src={src} className='w-8 h-8 md:w-12 md:h-12 rounded-full' alt='Social Icon' />
    </div>
  );
};

export default SocialCard;
