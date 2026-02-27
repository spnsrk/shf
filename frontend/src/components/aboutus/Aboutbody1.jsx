import React from "react";

const AboutUs = () => {
  // Static dummy data
  const aboutContent = {
    image_url: "/Images/aboutus/Group 1171275515.png",
    sub_text: "The Journey So far",
    title: "HINDUS IN SCOTLAND",
  };

  return (
    <div className="flex flex-col items-center justify-center my-12 mx-4 md:flex-row md:space-x-4 sm:mx-8 sm:my-32 sm:gap-x-8 md:mx-16 lg:mx-32">
      {/* Image Div */}
      <div className="relative w-full md:w-1/2">
        <img src={aboutContent.image_url} />
      </div>

      {/* RIGHT TEXT */}
      <div className="flex flex-col mt-7 md:mt-0 md:w-1/2 lg:w-2/3 justify-center">
        {/* sub-text */}
        <div className="inline-flex gap-2 items-center">
          <p className="text-gray-800 text-md font-semibold font-montserrat">
            {aboutContent.sub_text}
          </p>
          <hr className="w-[60px] border-t-1 border-gray-300 my-4" />
        </div>

        {/* title */}
        <h1 className="text-3xl font-bold font-playfair" style={{ marginTop: '20px' }}>{aboutContent.title}</h1>
        <p
          className="text-1xl font-Inter mt-3"
          style={{ fontWeight: "600" }}
        >
          Welcome To The Official Website Of The Scottish Hindu Foundation! We
          are <br></br>Thrilled To Have You Here.
        </p>
        {/* description */}
        <p style={{ color: "#444", fontFamily: "Inter", fontSize: "16px", fontStyle: "normal", fontWeight: 300, lineHeight: "26px", textTransform: "capitalize",}} className="mt-3">
          Our organization is dedicated to preserving and promoting the vibrant tapestry of Hindu culture in Scotland.
        </p>
        <p style={{ color: "#444", fontFamily: "Inter", fontSize: "16px", fontStyle: "normal", fontWeight: 300, lineHeight: "26px", textTransform: "capitalize",}} className="mt-3">
        We bridge the gap between the Hindu community and the wider Scottish society, fostering understanding and cultural exchange. Through festivals, seminars, workshops, and educational programs, we provide opportunities for individuals to explore the richness of Hinduism.
        </p>
        <p style={{ color: "#444", fontFamily: "Inter", fontSize: "16px", fontStyle: "normal", fontWeight: 300, lineHeight: "26px", textTransform: "capitalize",}} className="mt-3">
        We also offer support services to empower the Hindu community and ensure their needs are met. Join us in celebrating diversity, fostering harmony, and embracing a brighter future for Scotland.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;