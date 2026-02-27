import { useState, useRef } from "react";
import React from "react";
import Button from "./Button";
import styles from "./Contactus.module.css";
import Map from "./Map";
import Form1 from "./Form1";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";

const Contactus = () => {
    const templeList = [
        "Hindu Mandir Glasgow",
        "Aberdeen Hindu Temple",
        "Edinburgh Hindu Mandir & Cultural Centre",
        "Tayside Hindu Cultural Community Centre",
        "Mother Earth Hindu Temple",
        "Sri Mangala Vinayagar Hindu Temple & Community Centre",
        "Pashupati Nath Temple",
        "ISKCON Karuna Bhavan Temple"
    ];

    // Map of temple names to their corresponding addresses
    const templeAddresses = {
        "Hindu Mandir Glasgow": {
            address: "1 La Belle Pl, Glasgow G3 7LH",
            phone: "0141 332 0482",
        },
        "Aberdeen Hindu Temple": {
            address: "Bankhead Rd, Bucksburn, Aberdeen AB21 9HQ",
            phone: " ",
        },
        "Edinburgh Hindu Mandir & Cultural Centre": {
            address: "St Andrew Pl, Leith, Edinburgh EH6 7EG",
            phone: " ",
        },
        "Tayside Hindu Cultural Community Centre": {
            address: "10 Taylor's Ln, Dundee DD2 1AQ",
            phone: " ",
        },
        "Mother Earth Hindu Temple": {
            address: "14 Larchfield Ct, Newton Mearns, Glasgow G77 5PL",
            phone: " ",
        },
        "Sri Mangala Vinayagar Hindu Temple & Community Centre": {
            address: "105 Denmark St, Glasgow G22 5EU",
            phone: " ",
        },
        "Pashupati Nath Temple": {
            address: "1 Priory Ave, Paisley PA34 4NS",
            phone: " ",
        },
        "ISKCON Karuna Bhavan Temple": {
            address: "Bankhouse Rd, Lesmahagow, Lanark ML11 0ES",
            phone: " ",
        }
    };

    const [activeItems, setActiveItems] = useState("Hindu Mandir Glasgow");
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

    const { address, phone } = templeAddresses[activeItems] || {};

    return (
        <div className={styles.ContactUsContainer}>
            <Form1 />

            <h1 className={styles.tepleinscotland} style={{ marginBottom: "75px", fontSize: "42px" }}>
                Mandirs in Scotland
            </h1>
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
                <p className={styles.templeAddress}>{address || "Address not available"}</p>
                <p className={styles.templeNo}>{phone || "Phone number not available"}</p>
            </div>

            <Map mapName={activeItems} />
        </div>
    );
};

export default Contactus;