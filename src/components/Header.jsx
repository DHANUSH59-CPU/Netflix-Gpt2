import React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 p-4 z-50">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="h-8 md:h-12 w-auto"
      />
    </div>
  );
};

export default Header;
