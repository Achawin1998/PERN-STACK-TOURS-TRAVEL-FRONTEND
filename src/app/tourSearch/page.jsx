"use client";
import React, { useEffect, useState, Suspense } from "react";
import CommonSection from "../shared/CommonSection";
import { Col, Container, Row } from "reactstrap";
import TourCard from "../shared/TourCard";
import Newsletter from "../shared/Newsletter";
import { BASE_URL } from "../utils/config";
import "../style/toursearch.css";

// get ค่าที่ url ส่งมา
import { useSearchParams } from "next/navigation";

function SearchResult() {
  const [singleTour, setSingleTour] = useState(null);

  const searchParams = useSearchParams(); // รับค่า url ที่ถูกส่งมา

  let location = searchParams.get("city");
  let distance = searchParams.get("distance");
  let maxGroupSize = searchParams.get("maxGroupSize");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/tours/search/getTourBysearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
        );
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const result = await res.json();
        setSingleTour(result.data);
      } catch (error) {
        alert(error.message);
        setSingleTour([]); // ตั้งค่าเป็น array ว่างเปล่าเมื่อเกิดข้อผิดพลาด
      }
    };

    getData();
  }, [location, distance, maxGroupSize]);

  return (
    <div>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {singleTour === null ? (
              <h4 className="search-tour">Loading...</h4>
            ) : singleTour.length === 0 ? (
              <h4 className="search-tour">No tour found</h4>
            ) : (
              singleTour.map((tour) => (
                <Col lg="3" key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </div>
  );
}

export default function SuspendedSearchResult() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchResult />
    </Suspense>
  );
}
