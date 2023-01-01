import React from "react";

const Address = () => {
  return (
    <ul>
      <li>
        <img className="svg" src="img/svg/phone.svg" alt="" />
        <a href="Tel: 7614123224">+62 878 1862 3001</a>
      </li>
      {/* End li */}

      <li>
        <img className="svg" src="img/svg/mail.svg" alt="" />
        <span>
          <a href="mailto:doniputrapurbawa@gmail.com">doniputrapurbawa@gmail.com</a>
        </span>
      </li>
      {/* End li */}

      <li>
        <img className="svg" src="img/svg/map.svg" alt="" />
        <span>
          Garuda VIII / K-86 Street Rewwin Waru Sidoarjo
          <br /> 61256 Indonesia
        </span>
      </li>
    </ul>
  );
};

export default Address;
