import React from "react";
import { Link } from "react-router-dom";

const Card = ({ src, title, description, linkTo }) => {
  return (
    <>
      <Link to={linkTo}>
        <div className="flex flex-col gap-4 max-w-md h-[500px] overflow-hidden lg:hover:scale-110 transition duration-300 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] cursor-pointer">
          <div className="image">
            <img className="w-[350px] h-[240px] object-cover" src={src} alt={title} />
          </div>
          <div className="px-4 py-4 flex flex-col gap-4">
            <h2 className="font-bold text-lg mb-2 font-playfair">{title}</h2>
            <p
              className="text-gray-700 text-sm font-inter line-clamp-3"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: "#555",
                textAlign: "justify",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "22px",
                textTransform: "capitalize",
              }}
            >
              {description}
            </p>
          </div>
          <div className="px-3 py-3">
            <button className="bg-shfOrange hover:bg-shfPurple text-white font-base py-2 px-4 rounded-full font-inter text-sm">
              Explore Now
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;


