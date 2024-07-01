"use client";
import React from "react";
import { Card, CardBody } from "reactstrap";
import Link from "next/link";
import "./tour-card.css";
import calculateAvgRating from "../utils/avgRating";
//import tourData from '../../../assets/data/tours'

function TourCard({ tour }) {
  // export ไปให้ FeaturedTour ใน components , หน้า tours

  const { id, title, photo, city, price, featured, reviews } = tour;

  const { totalRating, avaRating } = calculateAvgRating(reviews); // import ค่ามาจากหน้า utils ย้ายฟังชันไปไฟล์น้นเพื่อลดโค้ดให้ดูสวยงาม

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i>
              {city}
            </span>

            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i>
              {avaRating === 0 ? "no review" : avaRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <>
                  <span>({reviews?.length})</span>
                </>
              )}
            </span>
          </div>

          <h5 className="tour__title">
            <Link href={`/tours/${id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              {price}
              <span> / per person</span>
            </h5>

            <button className="btn booking__btn">
              <Link href={`/tours/${id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default TourCard;
