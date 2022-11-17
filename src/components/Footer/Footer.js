import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import "./FooterCss.css";
import twitter from "../assets/images/social-icons/twitter.png";
import spotify from "../assets/images/social-icons/spotify.png";
import linkedin from "../assets/images/social-icons/linkedin.png";
import insta from "../assets/images/social-icons/insta.png";
import { fadeIn, bounce, fadeInLeft, fadeInRight } from "react-animations";
import styled, { keyframes } from "styled-components";
const FadeIn = styled.div`
  animation: 5s ${keyframes`${fadeIn}`};
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
const footer = () => {
  return (
    <div>
      <section>
        <div className="footer py-5">
          <div className="container">
            <FadeIn>
            <Row className="px-4">
              <Col lg={4}>
                <div className="newsletter">
                  <div className="text1">
                    <span className="head1 pb-3">
                      NOT YOUR REGULAR NEWSLETTER
                    </span>
                    <p className="para1">
                      Sign up to get the latest news and updates on our journal
                    </p>
                    <div className="d-flex flex-direction-row justify-content-space-between align-items-center">
                      <Form className="form">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address *</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder=""
                            className="py-3"
                          />
                        </Form.Group>
                      </Form>
                      <div className="">
                        <Button
                          href="#"
                          variant=""
                          size="lg"
                          className="contact-btn"
                        >
                          SUBMIT
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="contact-col mx-auto">
                  <ListGroup className="px-3">
                    <ListGroup.Item>
                      <span className="head1">CONTACT</span>
                    </ListGroup.Item>

                    <ListGroup.Item action href="#link2">
                      Creative Culture Club
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                      108 Ibn Gabirol St., Tel Aviv-Yafo
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="#link2"
                      mailto="mailto:contact@creativecultureclub.com"
                    >
                      contact@creativecultureclub.com
                    </ListGroup.Item>
                    <div className="mt-3">
                      <ListGroup as="ul" className="d-flex flex-row social-ul">
                        <ListGroup.Item as="li" active>
                          <Image src={insta} />
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          <Image src={linkedin} />
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          <Image src={spotify} />
                        </ListGroup.Item>
                        <ListGroup.Item as="li">
                          <Image src={twitter} />
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                  </ListGroup>
                </div>
              </Col>
              <Col lg={2}>
                <div className="menu mx-auto">
                  <ListGroup className="px-3">
                    <ListGroup.Item>
                      <span className="head1">MENU</span>
                    </ListGroup.Item>

                    <ListGroup.Item action href="#link2">
                      Work Journal
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                      Offerings
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                      About
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                      Journal
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
              <Col lg={3}>
                <div className="menu what-we-do mx-auto">
                  <ListGroup className="px-3">
                    <ListGroup.Item>
                      <span className="head1">WHAT WE DO</span>
                    </ListGroup.Item>

                    <ListGroup.Item action href="#link2">
                      Talks{" "}
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                      Workshops
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                      Masterclasses
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                      Bespoke Experiences
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
            </Row>
            </FadeIn>
         
           
              <FadeInLeft>
              <hr/>
              </FadeInLeft>
           
            <div className="copyright px-4">
                <p>
                @2022 by Creative Culture Club. Images by Ariel Efron & Orit Pnini.
                </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default footer;
