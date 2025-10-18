import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="join join-vertical btn-block">
      <button className="btn justify-start join-item py-10 btn-xl btn-block bg-white">
        <FaFacebook></FaFacebook> Facebook
      </button>
      <button className="btn join-item justify-start py-10 btn-xl btn-block bg-white">
        <BsTwitter></BsTwitter> Twitter
      </button>
      <button className="btn join-item justify-start py-10 btn-xl btn-block bg-white">
        <BsInstagram></BsInstagram> Instagram
      </button>
    </div>
  );
};

export default FindUs;
