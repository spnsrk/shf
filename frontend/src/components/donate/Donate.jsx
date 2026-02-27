import Footer from "../footer/Footer";
import Header from "../header/Header";
import Herosection from "../herosection/Herosection";
import Introcard from "./Introcard";
import Donationscards from "./Donationscards";
import Bankdetails from "./Bankdetails";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";

const Donate = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get(`${API_URL}/donations`);
        const reversedDonations = response.data.reverse();
        setDonations(reversedDonations);
      } catch (error) {
        console.error("Error fetching donation data:", error);
      }
    };

    fetchDonations();
  }, []);

  return (
    <>
      <Header />

      <Herosection
        imageUrl="\Images\Herosection\donation.png"
        heading="Donate"
        description="Home/ Donate"
      />

      <div className="textpart my-8 md:my-16 px-4 sm:mx-8 lg:mx-32 xl:mx-44 mb-8 md:mb-12">
        <div className="inline-flex gap-2 justify-center items-center">
          <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat mb-4">Help the needy</p>
          <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair">Donate</h2>
      </div>

      <Introcard />
      <div className="Payment px-4 mt-12 md:mt-24 mb-8 md:px-20 w-[95%] sm:w-[90%] md:w-[80%] mx-auto">
        <Bankdetails />
      </div>
      <Footer />
    </>
  );
};

export default Donate;
