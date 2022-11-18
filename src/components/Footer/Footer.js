import React, { useEffect } from "react";
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
import WOW from 'wowjs';
const Footer = () => {

  useEffect(() => {
    new WOW.WOW({
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         false
  }).init();
   }, [])
  return (
    <div>
      <section>
        <div className="footer py-5">
          <div className="container">
         
            <Row className="px-4">
              <Col lg={4}>
                <div className="newsletter wow fadeInLeft center" data-wow-delay="0.2s" data-wow-offset="10">
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
                <div className="contact-col mx-auto  wow fadeInLeft center" data-wow-delay="0.4s" data-wow-offset="10">
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
                <div className="menu mx-auto  wow fadeInLeft center" data-wow-delay="0.6s" data-wow-offset="10">
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
                <div className="menu what-we-do mx-auto wow fadeInLeft center" data-wow-delay="0.8s" data-wow-offset="10">
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
        
         
           
        
              <hr className="wow fadeInLeft center" data-wow-delay="0.5s" data-wow-offset="10"/>
   
           
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

export default Footer;
