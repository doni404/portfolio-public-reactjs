import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="copy">
          <p>
            &copy; {new Date().getFullYear()} by{" "}
            Doni Putra. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
