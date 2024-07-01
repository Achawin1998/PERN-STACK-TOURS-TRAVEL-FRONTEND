"use client";
import React, { useEffect } from "react";
import "../style/about.css";

//Image
const imgAbout =
  "https://plus.unsplash.com/premium_photo-1661576761935-bae1efc71f49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function AboutPage() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("js-preloader").classList.add("loaded");
    }, 300);
  }, []);

  return (
    <section className="about-us">
      <div className="about_container">
        <div className="row">
          <div className="about_flex">
            <h2>About Us</h2>
            <h3>Discover Our team</h3>
            <p>
              We are a passionate team dedicated to providing safety and high
              quality service to our customers. Our company was founded in 2008
              with the mission of making people&apos;s lives easier and more
              comfortable. since then We have worked hard to earn the trust of
              our customers. and to develop innovative solutions that meet the
              needs of our customers.
            </p>

            <div className="social-links">
              <a href="#">
                <i className="ri-facebook-circle-fill"></i>
              </a>
              <a href="#">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href={"https://github.com/Achawin1998"} target="_blank">
                <i className="ri-github-line"></i>
              </a>
            </div>
            <a href="#" className="btn_about">
              Learn More
            </a>
          </div>
          <div className="about_flex">
            <img src={imgAbout} />
          </div>
        </div>

        {/* Preloader start */}
        <div id="js-preloader" className="js-preloader">
          <div className="preloader-inner">
            <span className="dot"></span>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        {/* Preloader end */}
      </div>
    </section>
  );
}

export default AboutPage;
