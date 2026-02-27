import React, { useState, useRef } from "react";
import Header from "../../header/Header";
import Herosection from "../../herosection/Herosection";
import styles from "../../contact/Contactus.module.css";
import Button from "../../contact/Button";
import Map from "../../contact/Map";
import Footer from "../../footer/Footer";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";

const Visitlocalmandir = () => {
  const templeList = [
    "Hindu Mandir Glasgow",
    "Aberdeen Hindu Temple",
    "Edinburgh Hindu Mandir & Cultural Centre",
    "Tayside Hindu Cultural Community Centre",
    "Mother Earth Hindu Temple",
    "Sri Mangala Vinayagar Hindu Temple & Community Centre",
    "Pashupati Nath Temple",
    "ISKCON Karuna Bhavan Temple",
  ];

  const templeAddresses = {
    "Hindu Mandir Glasgow": {
      address: "1 La Belle Pl, Glasgow G3 7LH",
      phone: "0141 332 0482",
    },
    "Aberdeen Hindu Temple": {
      address: "Bankhead Rd, Bucksburn, Aberdeen AB21 9HQ",
      phone: "Not available",
    },
    "Edinburgh Hindu Mandir & Cultural Centre": {
      address: "St Andrew Pl, Leith, Edinburgh EH6 7EG",
      phone: "Not available",
    },
    "Tayside Hindu Cultural Community Centre": {
      address: "10 Taylor's Ln, Dundee DD2 1AQ",
      phone: "Not available",
    },
    "Mother Earth Hindu Temple": {
      address: "14 Larchfield Ct, Newton Mearns, Glasgow G77 5PL",
      phone: "Not available",
    },
    "Sri Mangala Vinayagar Hindu Temple & Community Centre": {
      address: "105 Denmark St, Glasgow G22 5EU",
      phone: "Not available",
    },
    "Pashupati Nath Temple": {
      address: "1 Priory Ave, Paisley PA34 4NS",
      phone: "Not available",
    },
    "ISKCON Karuna Bhavan Temple": {
      address: "Bankhouse Rd, Lesmahagow, Lanark ML11 0ES",
      phone: "Not available",
    },
  };

  const [activeItems, setActiveItems] = useState("Hindu Mandir Glasgow");
  const { address, phone } = templeAddresses[activeItems] || {
    address: "Not available",
    phone: "Not available",
  };

  const scrollContainerRef = useRef(null);

  const handleButton = (item) => setActiveItems(item);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Header />
      <Herosection
        imageUrl="/Images/SHYF/media/herosectionimage.png"
        heading="Visit Local mandir"
        description="Home/ Visit Local mandir"
      />

      <div className="textpart my-8 md:my-16 px-4 sm:mx-8 xl:mx-44 mb-0">
        <div className="inline-flex gap-2 justify-center items-center">
          <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat mb-4">
            The Heartbeat
          </p>
          <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-4">
          Visit Local mandir
        </h2>
      </div>

      <p className="px-4 sm:mx-8 xl:mx-44 w-full md:w-[60%] lg:w-[40%]" style={{ color: "#000", textAlign: "justify", fontFamily: "'Nunito Sans', sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: "30px" }}>

        Hindu Mandirs are vibrant hubs of activity, serving as both spiritual
        sanctuaries and centers of social engagement. Whether you're curious to
        learn more about Hinduism, interested in organizing a school visit, or
        eager to get involved in community events, your local Mandir offers a
        welcoming space for all. Explore the rich traditions, wisdom, and
        warmth that form the foundation of the Hindu community. Visit your
        nearest Mandir and become part of this dynamic and inclusive
        environment.
      </p>

      <div className={styles.ContactUsContainer}>
        <div className="flex" style={{ gap: '30px' }}>
          <button
            className={`${styles.arrowButton} left-0`}
            onClick={scrollLeft}
            style={{ fontSize: "30px", color: "#F4911F" }}
          >
            <FaCircleChevronLeft />
          </button>
          <div className={`${styles.buttonContainer}`} ref={scrollContainerRef} style={{ margin: '0px', padding: '0px' }}>
            <div className="flex whitespace-nowrap">
              {templeList.map(item => (
                <Button
                  key={item}
                  templeName={item}
                  handleButton={() => handleButton(item)}
                  isActive={activeItems === item}
                />
              ))}
            </div>
          </div>
          <button
            className={`${styles.arrowButton} right-0`}
            onClick={scrollRight}
            style={{ fontSize: "30px", color: "#F4911F" }}
          >
            <FaCircleChevronRight />
          </button>

        </div>

        <div className={styles.addresName}>
          <div className="flex">
            <p className={styles.bar}></p>
            <p className={styles.templeName}>{activeItems}</p>
          </div>
          <p className={styles.templeAddress}>{address}</p>
          <p className={styles.templeNo}>{phone}</p>
        </div>

        <Map mapName={activeItems} />
      </div>
      <Footer />
    </div>
  );
};

export default Visitlocalmandir;
