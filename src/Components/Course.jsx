import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Course = () => {
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
          <div className='bg-blue p-3 rounded-full text-white'>
            <FaArrowLeft />
          </div>
          <div className='bg-blue p-3 rounded-full text-white'>
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
          <b className='text-blue text-2xl'>Instructor Name</b><br />
          <strong className='block mt-2'>
            Post Instructor @tnpofficer
          </strong>
          <p className='mt-2'>
            Lorem ipsum dolor sit amet, consectetur<br />
            adipiscing elit. Phasellus ultricies velit vel mi<br />
            feugiat, ac feugiat eros suscipit. Vivamus nec<br />
            dictum risus. Sed sit amet eros a felis luctus<br />
            facilisis. Integer at urna in nunc vehicula<br />
            placerat sed quis nulla.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Course;
