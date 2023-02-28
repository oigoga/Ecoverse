import React from 'react';

const Button = ({ text }) => {
  return (
    <div>
  <button className='bg-green font-montserrat text-white text-base w-full rounded-md py-2'>{text}</button>
  </div>
  );
};

export default Button;