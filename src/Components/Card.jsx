import React from 'react';

const Card = () => {
  return (
    <div className='bg-gray-200 p-4 m-4 rounded-lg shadow-md w-64'>
      <div className='flex flex-row items-center'>
        <div className='flex-shrink-0'>
          <img src='profile.png' className='w-12 h-auto rounded-full' alt='Instructor' />
        </div>
        <div className='ml-4 text-2xl text-blue-500 font-semibold'>
          Learner Name
        </div>
      </div>
      <div className='mt-4 text-gray-700'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies velit vel mi feugiat, ac feugiat eros suscipit. Vivamus nec vehicula placerat sed quis nulla.
      </div>
    </div>
  );
};

export default Card;
