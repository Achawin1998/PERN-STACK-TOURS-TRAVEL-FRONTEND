"use client";
import React, { useEffect } from "react";
import "../style/home.css";
import { Col, Container, Row } from "reactstrap";

// components
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../components/services/ServiceList";
import FeaturedTourLIst from "../components/Featured-tours/FeaturedTourLIst";
import MasonryImagesGallery from "../components/Image-gallery/MasonaryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

//img
const img01 =
  "https://images.unsplash.com/photo-1532884928231-ef40895eb654?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img02 =
  "https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img03 =
  "https://images.unsplash.com/photo-1604452570585-b7458205e078?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function HomePage() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("js-preloader").classList.add("loaded");
    }, 1000);
  }, []);

  return (
    <>
      <section>
        <Container>

          {/* Section 1 */}
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={"./images/world.png"} alt="World" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  If you are looking for a good place to travel, somewhere at a
                  friendly price and first class service including your safety.
                  Why don&apos;t you try using our service first? We,{" "}
                  <span>TRAVEL WORLD</span> welcome everyone.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={img01} alt="Travel Image 1" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box hero__md__show mt-4">
                <img src={img02} alt="Travel Image 2" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={img03} alt="Travel Image 3" />
              </div>
            </Col>

            {/*-------------- SearchBar --------------- */}
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* Section 1 end */}

      {/* Section 2 */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <Col lg="9">
              <ServiceList />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section 2 end */}

      {/* Section 3 featured tour */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourLIst />
          </Row>
        </Container>
      </section>
      {/* Section 3 end */}

      {/* Section 4 experience */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br /> We will serve you{" "}
                </h2>
                <p>
                  Amazing travel guaranteed. Top 10 Airlines that has received
                  <br />
                  the most trust from customers.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trips</h6>
                </div>

                <div className="counter__box">
                  <span>3k+</span>
                  <h6>Regular clients</h6>
                </div>

                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experiences</h6>
                </div>
              </div>
            </Col>

            <Col lg="6">
              <div className="experience__img">
                <img src={"./images/experience.png"} alt="Experience" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section 4 end */}

      {/* Section 5 gallery */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers&apos; tour gallery
              </h2>
            </Col>

            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section 5 end */}

      {/* Section 6 Testimonial */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>

            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section 6 end */}

      {/* Section 7 Newsletter */}
      <Newsletter />
      {/* Section 7 Newsletter end */}

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
    </>
  );
}

export default HomePage;
