import React from 'react';

const SocialCard = ({ src }) => {
    return (
        <div className='flex items-center justify-end  w-24 md:w-32 border-2 border-white rounded-full'>
            <div className='pr-5 text-2xl text-white'>67+</div>
            <img src={src} className='w-8 h-8 md:w-12 md:h-12 rounded-full' alt='Social Icon' />
        </div>
    );
};

export default SocialCard;
