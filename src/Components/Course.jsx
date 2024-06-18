import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Course = () => {
  const instructors = [
    {
      name: 'Instructor One',
      position: 'Senior Instructor @tnpofficer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies velit vel mi feugiat, ac feugiat eros suscipit. Vivamus nec dictum risus. Sed sit amet eros a felis luctus facilisis. Integer at urna in nunc vehicula placerat sed quis nulla.',
    },
    {
      name: 'Instructor Two',
      position: 'Junior Instructor @tnpofficer',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt.',
    },
    {
      name: 'Instructor Three',
      position: 'Junior Instructor @tnpofficer',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt.',
    },
    {
      name: 'Instructor Four',
      position: 'Junior Instructor @tnpofficer',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? instructors.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === instructors.length - 1 ? 0 : prevIndex + 1));
  };

  const currentInstructor = instructors[currentIndex];

  return (
    <div className='bg-gray-100 h-auto md:h-full rounded-xl mx-5 my-16 md:mx-20 p-6'>
      <div className='flex flex-col md:flex-row justify-between pr-5'>
        <div>
          <div className='text-blue text-3xl md:text-4xl font-bold'>
            Our Instructors
          </div>
          <div className='mt-2 md:mt-0'>
            Learn from Our Experienced and Dedicated Instructors.
          </div>
        </div>
        <div className='pt-5 md:pt-0 flex gap-2 self-center md:self-auto'>
          <div className='bg-blue p-3 rounded-full h-max text-white cursor-pointer' onClick={handlePrevClick}>
            <FaArrowLeft />
          </div>
          <div className='bg-blue p-3 rounded-full h-max text-white cursor-pointer' onClick={handleNextClick}>
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className='border-black border-solid border-2 mt-4'></div>
      <div className='flex flex-col md:flex-row justify-between p-8 items-center md:items-start'>
        <div className='mb-6 md:mb-0'>
        <img src='profile.png' className='w-48 md:w-64 h-auto' alt='Instructor' />
        </div>
        <div className='text-center md:text-left'>
          <b className='text-blue text-2xl'>{currentInstructor.name}</b><br />
          <strong className='block mt-2'>
            {currentInstructor.position}
          </strong>
          <p className='mt-2'>
            {currentInstructor.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Course;
