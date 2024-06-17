import React from 'react';
import SocialCard from './SocialCard';

const Footer = () => {
  return (
    <div className='bg-blue text-center p-5'>
      <div className='text-white text-xl md:text-3xl font-bold p-5'>
        VAST COMMUNITY OF STUDENTS
      </div>
      <div className='flex flex-wrap justify-center md:justify-around gap-4'>
        <SocialCard src='linkedin.png' />
        <SocialCard src='telegram.png' />
        <SocialCard src='instagram.png' />
      </div>
    </div>
  );
};

export default Footer;
