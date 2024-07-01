"use client";
import React from "react";
import TourCard from "@/app/shared/TourCard"; // อยู่ที่หน้า Shared
import { Col } from "reactstrap";
import "./featuredTourList.css";
//import tourData from '../../../../assets/data/tours.js' เดี๋ยวลองกลับมาใช้ตัวเดิม

// fetch data from backend
import useFetch from "@/app/hooks/useFetch";
import { BASE_URL } from "@/app/utils/config";

function FeaturedTourLIst() {
  // components นี้นำไปใช้ใน Home นำข้อมูลจากไฟล์ asset tours.js มา map

  const { data: featuerdTours ,loading , error} = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  return (
    <>
      {loading && <h4 className="loading">Loading........</h4>}

      {error && <h4 className="error">{error}</h4>}

      {!loading && !error && (
        <div className="Card-grid">
          {featuerdTours?.map((tour) => (
            <Col className="mb-4" key={tour.id}>
              <TourCard tour={tour} />
            </Col>
          ))}
        </div>
      )}
    </>
  );
}

export default FeaturedTourLIst;
