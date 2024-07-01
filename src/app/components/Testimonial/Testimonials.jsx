"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "./testimonials.css";

const ava01 = "/images/ava-1.jpg";
const ava02 = "/images/ava-2.jpg";
const ava03 = "/images/ava-3.jpg";
const ava04 =
  "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg";
const ava05 =
  "https://cdn.pixabay.com/photo/2022/07/18/19/57/dog-7330712_1280.jpg";
const ava06 =
  "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg";

function Testimonials() {
  const settings = {
    // ตั้งค่าการเลื่อน slides
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2500,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3 ">
        <p>
          Thank you for your amazing service and gift and excellent to the
          recipient. It was surprisingly good. See you next time for sure.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <Image
            width={100}
            height={100}
            src={ava01}
            alt="Avatar 1"
            className="w-25 h-25 rouned-2"
          />{" "}
          {/* ใช้ Image จาก next/image และเพิ่ม alt */}
          <div>
            <h5 className="mb-0 mt-3">Jey</h5>
            <h6>Customer</h6>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Thank you very much. It is beautiful, as in the attached picture. In
          the future, I will use the this services again.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <Image
            width={100}
            height={100}
            src={ava02}
            alt="Avatar 2"
            className="w-25 h-25 rouned-2"
          />{" "}
          {/* ใช้ Image จาก next/image และเพิ่ม alt */}
          <div>
            <h5 className="mb-0 mt-3">Taylor</h5>
            <h6>Customer</h6>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          This flight is very good service. I&apos;m not exaggerating. But this
          is a premium service. Plus the price is not expensive as well.
        </p>{" "}
        {/* ใช้ &apos; แทน ' */}
        <div className="d-flex align-items-center gap-4 mt-3">
          <Image
            width={100}
            height={100}
            src={ava03}
            alt="Avatar 3"
            className="w-25 h-25 rouned-2"
          />{" "}
          {/* ใช้ Image จาก next/image และเพิ่ม alt */}
          <div>
            <h5 className="mb-0 mt-3">Thomas</h5>
            <h6>Customer</h6>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          To be honest, I didn&apos;t expect anything at first. Book because
          it&apos;s cheap. But I was really surprised by the service here. It
          was really good.
        </p>{" "}
        {/* ใช้ &apos; แทน ' */}
        <div className="d-flex align-items-center gap-4 mt-3">
          <Image
            width={100}
            height={100}
            src={ava06}
            alt="Avatar 6"
            className="w-25 h-25 rouned-2"
          />{" "}
          {/* ใช้ Image จาก next/image และเพิ่ม alt */}
          <div>
            <h5 className="mb-0 mt-3">Maria</h5>
            <h6>Customer</h6>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          This is much more comfortable than I thought. I love it. My cat looks
          so relaxed. Because of the service here
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <Image
            width={100}
            height={100}
            src={ava04}
            alt="Avatar 4"
            className="w-25 h-25 rouned-2"
          />{" "}
          {/* ใช้ Image จาก next/image และเพิ่ม alt */}
          <div>
            <h5 className="mb-0 mt-3">Mika</h5>
            <h6>Customer</h6>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          This is the 2nd time I have used this flight. I have to say that I was
          not disappointed in the slightest, the service was still excellent as
          always.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <Image
            width={100}
            height={100}
            src={ava05}
            alt="Avatar 5"
            className="w-25 h-25 rouned-2"
          />{" "}
          {/* ใช้ Image จาก next/image และเพิ่ม alt */}
          <div>
            <h5 className="mb-0 mt-3">Shabu</h5>
            <h6>Customer</h6>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Testimonials;
