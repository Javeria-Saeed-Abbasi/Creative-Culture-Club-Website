import React from "react";
import "./homeStyle.css";
import card1Img from "../assets/images/cardimg1.webp";
import { Container, Image } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
const Card1 = ({img, title, para}) => {
  return (
    <>
      <div className="cards1">
        <div className="cardImg">
          <Image src={img} />
          <div className="cardImg-text position-absolute">
            <span className="right-arrow">
              <AiOutlineArrowRight />
              {title} 
            </span>
            <br/>
            <br/>
            <p>
              {para}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
