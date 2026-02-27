import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Herosection from "../herosection/Herosection";
import MasonryGallery from "./MasonryGallery";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { API_URL } from "../../config";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [eventType, setEventType] = useState(""); // State to store selected event type
  const [filteredImages, setFilteredImages] = useState([]);
  const apiBaseUrl = API_URL;

  const getOrderedEventTypes = (items) => {
    const seen = new Set();
    const ordered = [];
    for (const image of items) {
      if (!seen.has(image.eventType)) {
        seen.add(image.eventType);
        ordered.push(image.eventType);
      }
    }
    return ordered;
  };

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${apiBaseUrl}/gallery`);
      const fetchedImages = response.data;
      setImages(fetchedImages);

      if (fetchedImages.length > 0) {
        const orderedTypes = getOrderedEventTypes(fetchedImages);
        const defaultEventType = orderedTypes[0]; // Set default to the first dropdown option
        setEventType(defaultEventType);
        setFilteredImages(fetchedImages.filter((image) => image.eventType === defaultEventType));
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEventTypeChange = (event) => {
    const selectedType = event.target.value;
    setEventType(selectedType);

    // Filter images based on the selected event type
    setFilteredImages(images.filter((image) => image.eventType === selectedType));
  };

  useEffect(() => {
    fetchImages();
  }, [apiBaseUrl]);

  return (
    <div>
      <Header />
      <Herosection
        imageUrl="/Images/Herosection/gallery.png"
        heading="Gallery"
        description="Home / Gallery"
      />
      <div className="textpart my-8 md:my-16 mx-2 sm:mx-8 xl:mx-44" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div className="inline-flex gap-2 justify-center items-center">
            <p className="text-gray-700 text-sm font-semibold text-nowrap font-montserrat">
              Sneak Peek Into
            </p>
            <hr className="w-[60px] border-t-1 border-gray-400 mx-auto text-nowrap" />
          </div>
          <h2 className="text-3xl font-bold font-playfair">Our Gallery</h2>
        </div>

        <div
          style={{
            position: "relative",
            display: "inline-block",
            width: "auto",
          }}
        >
          <select
            id="eventType"
            value={eventType}
            onChange={handleEventTypeChange}
            style={{
              width: "auto", // Allow content to determine width
              display: "inline-flex",
              padding: "12px 40px 12px 12px", // Adjust padding for arrow space
              borderRadius: "34px",
              border: "1px solid #1C1C1C",
              color: "#1C1C1C",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "capitalize",
              appearance: "none", // Hide default dropdown arrow
              backgroundColor: "white",
              outline: "none",
            }}
          >
            {getOrderedEventTypes(images).map((type) => {
              const label = String(type).replace(/^Diwal\b/i, "Diwali");
              return (
                <option key={type} value={type}>
                  {label}
                </option>
              );
            })}
          </select>
          {/* Custom Arrow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "12px", // Adjust to align with dynamic width
              transform: "translateY(-50%)",
              pointerEvents: "none",
              fontSize: "12px",
              color: "#1C1C1C",
            }}
          >
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="mx-2 sm:mx-12 xl:mx-44 xl:mb-28">
        <MasonryGallery images={filteredImages} isLoading={isLoading} />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
