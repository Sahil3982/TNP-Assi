import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex justify-between items-center p-4'>
      <div>
        <img src='logo.png' className='w-32 object-contain' alt='Logo' />
      </div>
      <div className='hidden md:flex justify-around gap-4 text-blue font-bold'>
        <a href="#" className='hover:scale-110 transition-transform duration-400'>Home</a>
        <a href="#" className='hover:scale-110 transition-transform duration-400'>Internships</a>
        <a href="#" className='hover:scale-110 transition-transform duration-400'>Mock Tests</a>
        <a href="#" className='hover:scale-110 transition-transform duration-400'>Learning</a>
        <a href="#" className='hover:scale-110 transition-transform duration-400'>About</a>
      </div>
      <div className='hidden md:block bg-blue text-white rounded-full px-4 py-1 m-1  hover:bg-white hover:text-blue hover:border hover:scale-110 transition-transform duration-400'>
        Get Started
      </div>
      <div className='md:hidden flex items-center'>
        <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
          <svg className='w-6 h-6 text-blue' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className='absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center'>
          <a href="#" className='py-2 text-blue font-bold hover:scale-110 transition-transform duration-400'>Home</a>
          <a href="#" className='py-2 text-blue font-bold hover:scale-110 transition-transform duration-400'>Internships</a>
          <a href="#" className='py-2 text-blue font-bold hover:scale-110 transition-transform duration-400'>Mock Tests</a>
          <a href="#" className='py-2 text-blue font-bold hover:scale-110 transition-transform duration-400'>Learning</a>
          <a href="#" className='py-2 text-blue font-bold hover:scale-110 transition-transform duration-400'>About</a>
          <div className='bg-blue text-white rounded-full px-4 py-2 mt-2  hover:bg-white hover:text-blue hover:border hover:scale-110 transition-transform duration-400'>
            Get Started
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
