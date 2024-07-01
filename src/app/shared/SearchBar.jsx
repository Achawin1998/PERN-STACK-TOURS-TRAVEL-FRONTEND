"use client";
import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

//fetchData
import { BASE_URL } from "../utils/config";
import { useRouter } from "next/navigation";

function SearchBar() {
  // export ไปที่ section 1

  const router = useRouter();

  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGrou0pSizeRef = useRef(0);

  const handleSearch = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGrou0pSizeRef.current.value;

    if (!location || !distance || !maxGroupSize) {
      alert("Please fill in all information.");
      return;
    }

    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBysearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );

    if (!res.ok) {
      alert("Something went wrong");
      return;
    }

    router.replace(
      `/tourSearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="Distance k/m"
                ref={distanceRef}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder="0" ref={maxGrou0pSizeRef} />
            </div>
          </FormGroup>
          <span className="search__icon" type="submit" onClick={handleSearch}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
}

export default SearchBar;
