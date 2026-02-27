import React from 'react';

const Introcard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4 sm:px-8 lg:mx-32 xl:mx-44">
      <div className="flex flex-col w-full md:max-w-[40%]">
        <h1
          style={{
            color: '#252A34',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600,
            textTransform: 'capitalize',
          }}
          className="text-xl sm:text-2xl md:text-[28px] leading-tight md:leading-[80px]"
        >
          Small Efforts, Big Changes
        </h1>
        <p
          style={{
            color: 'rgba(37, 42, 52, 0.50)',
            textAlign: 'justify',
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '30px',
          }}
        >
          We seek out world changers and difference-makers around the globe and their unique purpose.
          Together we can make a huge impact. Come join us in this journey and let&#39;s make the world a
          better place.
        </p>
      </div>
      <img src="/Images/donate/Group 1171275315.png" alt="Donation" className="w-full md:w-auto md:max-w-[50%]" />
    </div>
  );
};

export default Introcard;
