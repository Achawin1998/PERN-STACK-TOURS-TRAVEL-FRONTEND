"use client";
import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useRouter } from "next/navigation";

// for fetch booking api data
import { AuthContext } from "@/app/Context/AuthContext";
import { BASE_URL } from "@/app/utils/config";

function Booking({ tour, avaRating, reviews }) {
  const { price, title } = tour;
  const router = useRouter();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user.id,
    userEmail: user && user.email,
    tourName: title || "",
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });


  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "guestSize" && parseInt(value) < 1) {
      alert("GuestSize must be greater than 1."); // อัปเดตค่าของ guestSize ให้ไม่ต่ำกว่า 1
      setBooking((prev) => ({ ...prev, [id]: 1 }));
      return;
    } else {
      setBooking((prev) => ({ ...prev, [id]: value }));
    }
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

  // fetch data to the server
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!user || user === undefined || user === null) {
        return alert("Please sign in berfore booking.");
      }

      if (
        !booking.fullName &&
        booking.phone &&
        booking.guestSize &&
        booking.bookAt
      ) {
        alert("Please fill in your booking information before submitting.");
        return;
      }

      if (booking.guestSize < 0) {
        alert("GuestSize must be greater than 1.");
        return;
      }

      const res = await fetch(`${BASE_URL}/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(booking),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message);
        return;
      }
      router.replace("/thankyou");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/ per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-fill"></i>
          {avaRating === 0 ? null : avaRating} ({reviews?.length})
        </span>
      </div>

      {/* booking form */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__infomation">
          <FormGroup>
            <input
              type="text"
              placeholder={title}
              id="tourName"
              value={title}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Guest"
              value={booking.guestSize}
              id="guestSize"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Form>
      </div>

      {/* booking form end */}

      {/* booking bottom */}

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-line"></i> 1 person
            </h5>
            <span> ${price}</span>
          </ListGroupItem>

          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span> ${serviceFee}</span>
          </ListGroupItem>

          <ListGroupItem className="total border-0 px-0">
            <h5>Total</h5>
            <span> ${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button onClick={handleSubmit} className="btn primary__btn w-100 mt-4">
          Book now
        </Button>
      </div>
    </div>
  );
}

export default Booking;
