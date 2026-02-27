import React from 'react';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { ImQuotesRight } from "react-icons/im";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";

const Mantra = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/mantra`);
        const mantraArry = response.data;
        mantraArry.map(item => {
          if (item.month === new Date().toLocaleString('default', { month: 'long' })) {
            setData(item)
          }
        })
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  });

  return (
    <div className="w-full bg-shfOrange flex flex-col justify-center items-center text-white py-8 px-4 space-y-6">
      <div className="inline-flex justify-center items-center space-x-2">
        <hr className="w-[60px]" />
        <h1 className="text-md md:text-lg font-montserrat" style={{fontSize: '18px', fontWeight: '600'}}>Mantra Of The Month</h1>
        <hr className="w-[60px]" />
      </div>

      <div style={{ border: "2px solid #219D80" }} className="h-28 w-28  shadow-xl
       md:h-28 md:w-28 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          // src="/Images/homepage/mantra-image.jpeg"
          src={data.photoUrl || "/Images/homepage/mantra-image.jpeg"}
          alt="lord-krishna-photo"
        />
      </div>
      <div className="w-full px-6 sm:px-12 md:px-32 lg:px-64 relative">
        <BiSolidQuoteAltLeft className="-top-10 sm:-top-12 left-0 sm:left-4 md:left-24 lg:left-48" style={{ color: "#f6a74c", fontSize: "40px", position: "absolute" }} />

        <p className="text-center text-sm  md:text-md mb-8 font-montserrat" style={{fontSize: '16px', fontWeight: '500'}}>
          {data.textContent || "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself to be the cause of the results of your activities, and never be attached to not doing your duty.” ― Bhagavad Gita"}

        </p>
        <ImQuotesRight className="-bottom-4 sm:-bottom-0 right-0 sm:right-4 md:right-24 lg:right-48" style={{ color: "#f6a74c", fontSize: "40px", position: "absolute" }} />

      </div>
    </div>
  );
};

export default Mantra;
