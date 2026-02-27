import React from 'react';
import { Link } from 'react-router-dom';

const Story = () => {
  const content = {
    imgage_url: '/Images/homepage/Group 1171275513.png',
    sub_text: 'A Journey, A story',
    title: 'HINDUS IN SCOTLAND',
    description: 'Our organisation is dedicated to preserving and promoting the vibrant tapestry of Hindu culture in Scotland We bridge the gap between the Hindu community and the wider Scottish society, fostering understanding and cultural exchange.The convergence of Scottish ethos and Hinduism reflects a fascinating interplay between two rich and diverse cultural traditions, Scottish ethos, characterized by resilience, tenacity, and a deep sense of community, finds resonance with the profound spiritual teachings and vibrant rituals of Hinduism. This unique amalgamation creates a harmonious tapestry, blending elements of heritage, spirituality and collective identity.'
  };

  return (
    <div className="flex flex-col items-center justify-center my-12 mx-4 md:flex-row md:space-x-4 sm:mx-8 sm:my-32 sm:gap-x-8 md:mx-16 lg:mx-32 mt-16 sm:mt-20 md:mt-24">
      <div>
        <img src={content.imgage_url}/>
      </div>


      {/* RIGHT TEXT */}
      <div className="flex flex-col mt-7 md:mt-0 md:w-1/2 lg:w-2/3 justify-center">
        <hr className="w-[50px] border-t-1 border-shfOrange" />

        {/* Sub-text */}
        <p className="text-gray-700 text-sm font-semibold font-montserrat mb-4">
          {content.sub_text}
        </p>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-[39px] font-playfair font-bold leading-tight md:leading-[50px] capitalize mb-6">
          {content.title}
        </h1>

        {/* Description */}
        <p
          className="mt-3 font-montserrat text-justify"
          style={{
            color: '#444',
            textAlign: 'justify',
            fontFamily: 'Montserrat',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '32px',
            textTransform: 'capitalize',
          }}
        >
          {content.description}
        </p>

        {/* Button */}
        <Link to="/about-us">
          <button className="bg-shfOrange hover:bg-shfPurple font-base text-white py-2 px-4 mt-4 focus:outline-none w-fit rounded-full">
            More About Us
          </button>
        </Link>
      </div>

    </div>
  );
};

export default Story;
