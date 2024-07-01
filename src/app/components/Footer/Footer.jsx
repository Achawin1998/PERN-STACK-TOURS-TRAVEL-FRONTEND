"use client";
import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Link from "next/link";

function Footer() {
  const Year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <Row>
          <Col lg="3">
            <h5 className="footer__link-title">Social</h5>

            <div className="footer-links">
              <div className="social__links d-flex justify-content-center align-items-center gap-4">
                <span>
                  <Link href={"#"}>
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                </span>

                <span>
                  <Link href={"#"}>
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>

                <span>
                  <Link href={"#"}>
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>

                <span>
                  <Link href={"https://github.com/Achawin1998"} target="_blank">
                    <i className="ri-github-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">DISCOVER</h5>

            <div className="footer-links">
              <ul className="footer-group">
                <li>
                  <Link href={"/home"}>Home</Link>
                </li>
                <li>
                  <Link href={"#"}>About</Link>
                </li>
                <li>
                  <Link href={"/tours"}>Tours</Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">QUICK LINK</h5>
            <div className="footer-links">
              <ul className="footer-group">
                <li>
                  <Link href={"/gallery"}>Gallery</Link>
                </li>
                <li>
                  <Link href={"/login"}>Login</Link>
                </li>
                <li>
                  <Link href={"/register"}>Register</Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>

            <div className="footer-links ">
              <ListGroup className="footer__quick-links">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-1">
                    <span>
                      <i className="ri-mail-line"></i>
                    </span>
                    email:
                  </h6>

                  <p className="mb-1">Achawin1998s_@hotmail.com</p>
                </ListGroupItem>
              </ListGroup>

              <ListGroup className="footer__quick-links">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-1">
                    <span>
                      <i className="ri-phone-line"></i>
                    </span>
                    Phone:
                  </h6>

                  <p className="mb-0">+66922541189</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {Year} , design and develop by Achawin Intasit. All
              rights reserved.
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
