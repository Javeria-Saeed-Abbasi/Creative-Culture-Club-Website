import React, { useEffect, useState } from "react";

import {
  Button,
  Col,
  Container,
  Image,
  Row,
  Card,
  CardImg,
  ListGroup,
} from "react-bootstrap";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import image1 from "../assets/images/banner1.webp";
import "./homeStyle.css";
import SideImg from "../assets/images/side-img1.webp";
import Navbar1 from "../Navbar/Navbar";
import Slider1 from "./Slider1";
import Swiper from "swiper";
import Card1 from "./Card1";
import card1Img from "../assets/images/cardimg1.webp";
import card2Img from "../assets/images/cardimg2.webp";
import card3Img from "../assets/images/cardimg3.webp";
import card4Img from "../assets/images/cardimg4.webp";
import video1 from "../assets/images/video/bg-video1.mp4";
import { Player } from "video-react";
import poster from "../assets/images/banner2.1.webp";
import brand1 from "../assets/images/brands/fiver.webp";
import brand2 from "../assets/images/brands/wix.webp";
import brand3 from "../assets/images/brands/sohohouse.webp";
import brand4 from "../assets/images/brands/rapyd.webp";
import brand5 from "../assets/images/brands/sunday.webp";
import brand6 from "../assets/images/brands/intel.webp";
import brand7 from "../assets/images/brands/ormat.webp";
import brand8 from "../assets/images/brands/digital.webp";
import Footer from "../Footer/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import { fadeIn, bounce, fadeInLeft, fadeInRight } from "react-animations";
import styled, { keyframes } from "styled-components";


const FadeIn = styled.div`
  animation: 4s ${keyframes`${fadeIn}`};
`;
const FadeInLeftList = styled.div`
animation: 2s ${keyframes`${fadeInLeft}`};
`;
const FadeInLeftList2 = styled.div`
animation: 3s ${keyframes`${fadeInLeft}`};
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
const FadeInLeftBrand = styled.div`
animation: 1s ${keyframes`${fadeInLeft}`};
`;

const Home = () => {

 
  const card1Data = [
    {
      id: 0,
      img: card1Img,
      title: "Inspiring Talks",
      para: `An in depth conversation with an inspiring talent that takes us on
    their personal creative journey, moderated by us or by one of your
    team members under our guidance`,
    },
    {
      id: 1,
      img: card2Img,
      title: "Creativity Workshops",
      para: `A variety of artistic, cultural and academic workshops designed to re-energize creativity and will keep your people inspired. Scaleable in size for any type of team`,
    },
    {
      id: 2,
      img: card3Img,
      title: "Innovative Masterclasses",
      para: `Actual hands on masterclasses with versatile DOers, who share their unique knowledge and provide a glimpse behind their unconventional creative process`,
    },
    {
      id: 3,
      img: card4Img,
      title: "Bespoke Experiences",
      para: `A singular event or your own full one day festival, talk to us and we will help format and execute your own experience and be your one stop shop for everything`,
    },
  ];
  return (
    <>
    <Navbar1 />
      <div className="home">
        <section>
          <div className="bgimg1">
            <div className="container">
            <div className="text-1">
              <FadeInLeft>
                {" "}
                <p className="para-1">
                  Makers of meaningful cultural experiences
                </p>
              </FadeInLeft>
            </div>
            <div className="text-2">
              <FadeInLeft>
                {" "}
                <p className="para-2">
                  Creative Culture Club is a one stop boutique concept house. We
                  originate creative and engaging experiences, cut and measured
                  to your needs.
                </p>
              </FadeInLeft>
            </div>
            </div>
           
          </div>
        </section>
        <section>
          <div className="bg-blck">
            <FadeInRight>
              <div className="side-img">
                <Image src={SideImg} alt="side-img" />
              </div>
            </FadeInRight>

            <div className="text3">
              <FadeInLeft>
                <h5>OUR PRODUCTS</h5>{" "}
              </FadeInLeft>
            </div>
            <div className="text4">
              <FadeInLeft>
                <span className="h-1">
                  We are a Tel-Aviv based elite team of professional and
                  creative experts
                </span>
              </FadeInLeft>
            </div>

            <div className="text-5">
              <Row>
                <Col lg={5}>
                  <FadeInLeft>
                    <p className="para-1">
                      Founded by creative and business experts with decades of
                      experience, Creative Culture Club helps companies and
                      brands to keep their teams curious and inspired. From
                      conception to completion, we create an inspiring concept
                      and attend to every aspect until it comes to life. Our
                      creative & production teams design and produce your
                      captivating talk, workshop, masterclass, or online course
                      to the highest standard - whether it's online, on site, or
                      in an off-site event.
                    </p>
                  </FadeInLeft>

                  <div className="read-morebtn">
                    <FadeIn> <Button className="my-4">Read More</Button> </FadeIn>
                  </div>
                </Col>
                <Col lg={4}>
                  <FadeInLeft>
                    <p className="para-2">
                      Being a boutique creative concept house, we partner with
                      renowned artists, filmmakers, musicians, designers, DJs,
                      trendsetters, scholars, and future thinkers to produce an
                      array of cool content through experiences that are
                      tailored specifically for your business or team’s needs.
                    </p>
                  </FadeInLeft>
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <Slider1 />
        <section>
          <div className="bgOrng py-5">
            <div className="cards py-5 container">
              <Row className="mx-auto pb-5">
                <Col lg={6}>
                <Card1 {...card1Data[0]} />
                </Col>
                <Col lg={6}>
              <Card1 {...card1Data[1]} />
                </Col>
              </Row>
              <Row className="mx-auto pb-5">
                <Col lg={6}>
                  <Card1 {...card1Data[2]} />
                </Col>
                <Col lg={6}>
                  <Card1 {...card1Data[3]} />
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <section>
          <div className="banner3">
            <video
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                objectFit: "cover",
                opacity: "1",
              }}
              id="video1"
              preload="auto"
              src={video1}
              autoPlay={true}
              controls={false}
              loop={true}
              muted={true}
            ></video>
            <Container>
              <div className="videotext mx-auto">
               <FadeIn><p className="position-absolute">
                  Elastic thinking is our thing
                </p></FadeIn> 
              </div>
              <div className="abilities position-absolute">
              <FadeInLeft>
                <Row>
                  <Col lg={4}>
                    <Card style={{ width: "23rem", textAlign: "center" }}>
                      <Card.Body className="py-4 px-5">
                        <svg
                          preserveAspectRatio="xMidYMid meet"
                          data-bbox="20 17.215 160 165.57"
                          fill="#DC4122"
                          viewBox="20 17.215 160 165.57"
                          height="30"
                          width="30"
                          xmlns="http://www.w3.org/2000/svg"
                          data-type="shape"
                          role="presentation"
                          aria-hidden="true"
                        >
                          <g>
                            <switch>
                              <g>
                                <path d="m36.691 45.046 54.737 38.952-6.967-66.783h31.532l-6.948 66.783 54.718-38.952 15.766 27.359-60.741 26.887L180 127.595l-16.238 27.831-54.718-39.424 6.948 66.783H84.461l6.967-66.783-54.737 39.424-15.766-27.831 60.76-26.906L20 72.405l16.691-27.359z"></path>
                              </g>
                            </switch>
                          </g>
                        </svg>

                        <Card.Title className="py-3">
                          Scalable & Flexible
                        </Card.Title>

                        <Card.Text>
                          For an entire site or a specific team. We cut and
                          measure experiences that suit your specific needs
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4}>
                    <Card style={{ width: "23rem", textAlign: "center" }}>
                      <Card.Body className="py-4 px-5">
                        <svg
                          preserveAspectRatio="xMidYMid meet"
                          data-bbox="20 17.215 160 165.57"
                          fill="#DC4122"
                          viewBox="20 17.215 160 165.57"
                          height="30"
                          width="30"
                          xmlns="http://www.w3.org/2000/svg"
                          data-type="shape"
                          role="presentation"
                          aria-hidden="true"
                        >
                          <g>
                            <switch>
                              <g>
                                <path d="m36.691 45.046 54.737 38.952-6.967-66.783h31.532l-6.948 66.783 54.718-38.952 15.766 27.359-60.741 26.887L180 127.595l-16.238 27.831-54.718-39.424 6.948 66.783H84.461l6.967-66.783-54.737 39.424-15.766-27.831 60.76-26.906L20 72.405l16.691-27.359z"></path>
                              </g>
                            </switch>
                          </g>
                        </svg>

                        <Card.Title className="py-3">
                          Onsite, Online or Hybrid
                        </Card.Title>

                        <Card.Text>
                          In your office, on an exotic location or directly to
                          your employees’ desktop, our experiences always look
                          sharp
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4} className="">
                    <Card style={{ width: "23rem", textAlign: "center" }}>
                      <Card.Body className="py-4 px-5">
                        <svg
                          preserveAspectRatio="xMidYMid meet"
                          data-bbox="20 17.215 160 165.57"
                          fill="#DC4122"
                          viewBox="20 17.215 160 165.57"
                          height="30"
                          width="30"
                          xmlns="http://www.w3.org/2000/svg"
                          data-type="shape"
                          role="presentation"
                          aria-hidden="true"
                        >
                          <g>
                            <switch>
                              <g>
                                <path d="m36.691 45.046 54.737 38.952-6.967-66.783h31.532l-6.948 66.783 54.718-38.952 15.766 27.359-60.741 26.887L180 127.595l-16.238 27.831-54.718-39.424 6.948 66.783H84.461l6.967-66.783-54.737 39.424-15.766-27.831 60.76-26.906L20 72.405l16.691-27.359z"></path>
                              </g>
                            </switch>
                          </g>
                        </svg>

                        <Card.Title className="py-3">Best of Class</Card.Title>

                        <Card.Text>
                          We think of everything to the very last detail and
                          execute your experience to the highest standards from
                          A-Z
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                </FadeInLeft>
              </div>
            </Container>
          </div>
        </section>
        <section>
          <div className="services">
            <div className="container">
              <div className="service-list py-5">
           
                <Row>
                  <Col lg={6}>
                  <FadeInLeftList>
                    <ListGroup className="px-3">
                      <ListGroup.Item>
                        <span className="head4">EXPERIENCES PRODUCTION</span>
                      </ListGroup.Item>

                      <ListGroup.Item action href="#link2">
                        Talent Booking
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2">
                        Art Direction & Branding
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2">
                        Set Management
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2">
                        Set Design
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2">
                        Moderation Services
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2">
                        Direction & Filming
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2">
                        Event Photography
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2">
                        Internal Campaign Materials
                      </ListGroup.Item>
                    </ListGroup>
                    </FadeInLeftList>
                  </Col>
                  <Col lg={6}>
                  <FadeInLeftList2>
                    <ListGroup className="px-3">
                      <ListGroup.Item>
                        <span className="head4">CREATIVE CONSULTANCY</span>
                      </ListGroup.Item>

                      <ListGroup.Item action href="#link2">
                        Content Strategy
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2">
                        Concept Development
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2">
                        Creative Direction
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2">
                        Musical Consultancy
                      </ListGroup.Item>
                      <ListGroup.Item action href="#link2">
                        Content Writing
                      </ListGroup.Item>
                    </ListGroup>
                    </FadeInLeftList2>
                  </Col>
                </Row>
             
              </div>
              <FadeInLeft> <hr /> </FadeInLeft>
              <div className="brands">
                <div className="d-flex justify-content-center pb-5">
                <FadeIn>  <span className="head4">JOIN THE CLUB</span></FadeIn>
                </div>
                <div className="d-flex">
                <FadeInLeftBrand>
                  <div className="brandImg mtop-0">
                    <Image src={brand1} alt="" />
                  </div>
                  </FadeInLeftBrand>
                  <div className="brandImg">
                    <Image src={brand2} alt="" />
                  </div>
                  <FadeInLeftBrand>
                  <div className="brandImg">
                    <Image src={brand3} alt="" />
                  </div>
                  </FadeInLeftBrand>
                  <FadeInLeftBrand><div className="brandImg  mtop-0">
                    <Image src={brand4} alt="" />
                  </div>
                  </FadeInLeftBrand>
                  <FadeInLeftBrand><div className="brandImg  mtop-0">
                    <Image src={brand5} alt="" />
                  </div>
                  </FadeInLeftBrand>
                  <FadeInLeftBrand><div className="brandImg mtop-0">
                    <Image src={brand6} alt="" />
                  </div>
                  </FadeInLeftBrand>
                  <FadeInLeftBrand><div className="brandImg mtop-0">
                    <Image src={brand7} alt="" />
                  </div>
                  </FadeInLeftBrand>
                  <FadeInLeftBrand><div className="brandImg  mtop-0">
                    <Image src={brand8} alt="" />
                  </div>
                  </FadeInLeftBrand>
                </div>
              </div>
              <FadeInLeft> <hr /></FadeInLeft>
              <FadeInRight>
              <div className="cntc-block">
                <div className="block-text">
                <FadeInLeft>
                  <span className="head2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                    </svg>
                    Let's create cool stuff together
                  </span>
                  </FadeInLeft>
                  <div className="contact-btn d-flex mt-2">
                    <Button href="#" variant="" size="lg">
                      CONTACT US
                    </Button>
                  </div>
                </div>
              </div>
              </FadeInRight>
            </div>
          </div>
        </section>
      </div>
      <Footer />
     
    </>
  );
};

export default Home;
