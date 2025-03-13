import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` h-16 flex justify-center items-center p-4 fixed top-0 w-full transition-all duration-500 z-50 
    ${
      isScrolled
        ? "backdrop-blur-lg bg-[rgb(127,127,127)]/85 shadow-md"
        : "bg-[rgb(127,127,127)]"
    }`}
    >
      <img src="./kzklogogrey.png" alt="My Logo" className="h-16 w-auto" />
      <h1 className="text-4xl font-raleway font-bold text-gray-800">
        Portfolio
      </h1>
    </header>
  );
};

export default Header;
