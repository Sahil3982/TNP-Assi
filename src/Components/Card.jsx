import React from 'react';

const Card = () => {
  return (
    <div className='bg-gray-200 p-4 m-4 md:m-10 rounded-lg'>
      <div className='flex md:flex-row justify-between items-center'>
        <div className='mb-2 md:mb-0'>
          <img src='profile.png' className='w-12 h-auto' alt='Instructor' />
        </div>
        <div className='text-2xl text-blue font-semibold mt-2 md:mt-0'>
          Learner Name
        </div>
      </div>
      <div className='mt-2 md:mt-4'>
        Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. Phasellus ultricies velit vel mi feugiat, ac feugiat eros suscipit. Vivamus nec vehicula placerat sed quis nulla.
      </div>
    </div>
  );
};

export default Card;
