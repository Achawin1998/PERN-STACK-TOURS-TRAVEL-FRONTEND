"use client";
import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import "../style/tours.css";
import { Col, Container, Row } from "reactstrap";

// ไฟล์พวกนี้ import มาจาก shared
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";

// fecth data
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";

function Tours() {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours?page=${page}`); // ข้อมูลหน้า tours ต่าง ๆ จาก database fetch /api/tours from node server

  useEffect(() => {
    const pages = Math.ceil(8 / 4);
    setPageCount(pages);
    window.scroll(0, 0); // เวลากดคลิกเลือกหน้าให้ scroll ไปบนสุด
  }, [page]);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("js-preloader").classList.add("loaded");
    }, 500);
  }, []);

  return (
    <section>
      <CommonSection title={"All Tours"} />
      <div className="mb-4">
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </div>

      {loading && <h4 className="loading pt-5">Loading.......</h4>}
      {error && <h4 className="error pt-5">{error}</h4>}

      <div className="pt-0 ">
        <Container>
          {!loading && !error && (
            <>
              <div className="Card-grid ">
                {tours.map((tour) => (
                  <Col className="" key={tour.id}>
                    <TourCard tour={tour} />
                  </Col>
                ))}
              </div>

              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    // นำค่า arrays ที่มีใน pageCount มา map เพื่อให้ได้หน้าต่าง ๆ ตรงตามที่มีอยู่และมีใช้ค่า key ในการ map ด้วยเพื่อให้ค่าที่ถูกสร้างขึ้นมาใหม่ตรงกับ ค่าที่ถูก map
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </>
          )}
        </Container>
        <Newsletter />

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

export default Tours;
