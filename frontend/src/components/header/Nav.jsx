import React, { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import Rotate from "./Rotate";
import "./Nav.css";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [activeMobileItem, setActiveMobileItem] = useState(null);

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggleMenu]);

  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    setActiveSubDropdown(null);
  };

  const handleSubDropdown = (index) => {
    setActiveSubDropdown(activeSubDropdown === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (
      activeDropdown !== null &&
      !event.target.closest(".dropdown-container")
    ) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeDropdown]);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      path: "/about-us",
      dropdown: [
        { name: "About Us", path: "/about-us" },
        { name: "Journey So Far", path: "/about/journey-so-far" },
        { name: "Media", path: "/about/media" },
      ],
    },
    {
      name: "Events",
      path: "/events",
      dropdown: [
        { name: "Events", path: "/events" },
        { name: "Awards", path: "/events/awards" },
      ],
    },
    { name: "Shop", path: "/shop" },
    { name: "Gallery", path: "/gallery" },
    {
      name: "Work With Us",
      path: "/workwithus",
      dropdown: [
        {
          name: "Dharmocracy Works",
          path: "/workwithus/dharmocracy-works",
        },
      ],
    },
    {
      name: "Hindu Parent Council",
      path: "/parent-council"
    },
    {
      name: "Youth Foundation",
      path: "/shyf",
      dropdown: [
        {
          name: "Future Leader",
          path: "/shyf/university/FutureLeadersForum",
        },
        {
          name: "University",
          path: "/shyf/university/SUHS",
        },
      ],
    },
    { name: "Contact Us", path: "/contactus" },
  ];

  const dropdownStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '8px',
    width: 'min(300px, 90vw)',
    background: "#F5F5F5",
    boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.25)',
    zIndex: 50,
    visibility: 'hidden',
    transition: 'all 0.3s ease',
    padding: '15px 10px',
  };

  const dropdownContainerStyle = {
    position: 'relative',
  };

  const hoverStyle = {
    background: '#F4911F', // Hover background color
    boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.25)', // Updated hover box-shadow
    color: 'white', // Optional: Change text color on hover
  };

  const subItemStyle = {
    background: 'white',
    padding: '18px 20px', // Consistent padding for submenu items
    transition: 'background-color 0.3s ease, color 0.3s ease',
    borderRadius: '4px',
  };

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between items-center w-full px-4 md:px-10 bg-white shadow-md space-x-8">
        <div>
          <NavLink to="/" className="flex gap-1 items-center justify-center">
            <Rotate />
            <div className="w-32 h-14 md:w-40 md:h-14 flex items-center">
              <Logo />
            </div>
          </NavLink>
        </div>
        <div className="hidden lg:flex justify-between items-center flex-1 ml-8">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              style={dropdownContainerStyle}
              onMouseEnter={(e) => {
                if (e.currentTarget.querySelector('.dropdown-menu')) {
                  e.currentTarget.querySelector('.dropdown-menu').style.opacity = '1';
                  e.currentTarget.querySelector('.dropdown-menu').style.visibility = 'visible';
                }
              }}
              onMouseLeave={(e) => {
                if (e.currentTarget.querySelector('.dropdown-menu')) {
                  e.currentTarget.querySelector('.dropdown-menu').style.opacity = '0';
                  e.currentTarget.querySelector('.dropdown-menu').style.visibility = 'hidden';
                }
              }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center ${isActive
                    ? "border-b-2 border-shfPurple font-semibold"
                    : ""
                  } text-shfPurple hover:text-shfOrange transition-colors duration-300`
                }
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                )}
              </NavLink>
              {item.dropdown && (
                <div
                  className="dropdown-menu"
                  style={dropdownStyle}
                >
                  <div
                    className="py-2"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                    style={{display: 'flex',flexDirection: 'column' , gap: '20px'}}
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.path}
                        className="block w-full text-left text-sm"
                        style={subItemStyle}
                        onMouseEnter={(e) => {
                          Object.assign(e.currentTarget.style, hoverStyle); // Apply hover styles
                        }}
                        onMouseLeave={(e) => {
                          Object.assign(e.currentTarget.style, {
                            background: "white", // Reset to default
                            color: "black", // Reset text color
                            boxShadow: "none", // Remove hover shadow
                          });
                        }}
                        onClick={() => setToggleMenu(false)}
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Donate Now Button for Desktop */}
        <div className="ml-auto">
          <NavLink to="/donate">
            <button className="bg-shfOrange hover:bg-white hover:text-shfOrange transition duration-300 text-white font-inter px-6 py-2 font-semibold rounded-full">
              Donate
            </button>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex justify-between items-center w-full px-4 md:px-10 bg-white shadow-md">
        <div>
          <NavLink to="/" className="flex gap-1 items-center justify-center">
            <Rotate />
            <div className="w-32 h-14 md:w-40 md:h-14 flex items-center">
              <Logo />
            </div>
          </NavLink>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? (
              <XMarkIcon className="h-6 w-6 text-black" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu -- slide-in drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${toggleMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setToggleMenu(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[280px] max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${toggleMenu ? "translate-x-0" : "translate-x-full"} flex flex-col`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <span className="text-lg font-semibold text-shfPurple font-playfair">Menu</span>
            <button onClick={() => setToggleMenu(false)} aria-label="Close menu">
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Scrollable nav items */}
          <nav className="flex-1 overflow-y-auto py-2">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-50">
                {item.dropdown ? (
                  <>
                    <div className="flex items-center">
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `flex-1 px-5 py-3 text-[15px] font-medium ${isActive ? "text-shfOrange" : "text-gray-800"}`
                        }
                        onClick={() => setToggleMenu(false)}
                      >
                        {item.name}
                      </NavLink>
                      <button
                        className="px-4 py-3 text-gray-500"
                        onClick={() => setActiveMobileItem(activeMobileItem === index ? null : index)}
                        aria-label={`Expand ${item.name}`}
                      >
                        {activeMobileItem === index ? (
                          <ChevronUpIcon className="h-4 w-4" />
                        ) : (
                          <ChevronDownIcon className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${activeMobileItem === index ? "max-h-96" : "max-h-0"}`}
                    >
                      <div className="bg-gray-50 py-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <NavLink
                            key={subIndex}
                            to={subItem.path}
                            className={({ isActive }) =>
                              `block pl-9 pr-5 py-2.5 text-sm ${isActive ? "text-shfOrange font-medium" : "text-gray-600"}`
                            }
                            onClick={() => setToggleMenu(false)}
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-5 py-3 text-[15px] font-medium ${isActive ? "text-shfOrange" : "text-gray-800"}`
                    }
                    onClick={() => setToggleMenu(false)}
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          {/* Donate CTA at bottom */}
          <div className="p-5 border-t border-gray-100">
            <NavLink
              to="/donate"
              onClick={() => setToggleMenu(false)}
              className="block w-full text-center bg-shfOrange hover:bg-shfPurple text-white font-semibold py-3 rounded-full transition-colors duration-300"
            >
              Donate
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;