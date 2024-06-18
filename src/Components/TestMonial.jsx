import React from 'react';
import Card from './Card';

const TestMonial = () => {
  return (
    <>
      <center className='text-4xl font-extrabold text-blue mb-5'>Testimonials</center>  
      <div className='flex flex-wrap flex-col justify-center gap-4 px-4'>
        <Card  />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default TestMonial;
