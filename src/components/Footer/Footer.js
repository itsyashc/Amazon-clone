import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <img
          className="footer__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
        <strong>🌐India</strong>
      </div>
      <div className="footer__bottom">
        <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
        <p>Made by Yash Chourasiya</p>
      </div>
    </div>
  );
}

export default Footer;
