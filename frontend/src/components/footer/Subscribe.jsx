import React from 'react';

const Subscribe = () => {
  return (
    <div className="text-white flex-col w-full justify-center items-center text-center sm:text-left font-inter">
      <h2 className="text-lg font-normal w-full font-playfair">Subscribe</h2>
      <div className="mt-2 w-full flex justify-center sm:justify-normal rounded-sm">
        <input className="text-black font-normal px-6 py-3 rounded-sm text-sm w-full sm:w-2/3" type="text" placeholder="Enter Your Email"/>
        <button className="bg-shfOrange px-6 py-3 rounded-sm font-thin w-full sm:w-2/3">Subscribe</button>
      </div>
      <p className="text-[#CCC] font-montserrat text-sm font-normal leading-[20px] mt-1 w-full">
        Your email is safe with us, We don&apos;t spam 
      </p>
    </div>
  );
};

export default Subscribe;