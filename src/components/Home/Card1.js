import React from "react";
import "./homeStyle.css";
import card1Img from "../assets/images/cardimg1.webp";
import { Container, Image } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import { fadeIn, bounce, fadeInLeft, fadeInRight } from "react-animations";
import styled, { keyframes } from "styled-components";
const FadeIn = styled.div`
  animation: 4s ${keyframes`${fadeIn}`};
`;
const FadeInNav = styled.div`
  animation: 2s ${keyframes`${fadeIn}`};
`;
const FadeInLeft = styled.div`
  animation: 4s ${keyframes`${fadeInLeft}`};
`;
const FadeInRight = styled.div`
  animation: 2s ${keyframes`${fadeInRight}`};
`;
const Card1 = ({img, title, para}) => {
  return (
    <>

    <div className="cards1">
    <FadeInLeft>
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
        </FadeInLeft>
      </div>
  
    
    </>
  );
};

export default Card1;
