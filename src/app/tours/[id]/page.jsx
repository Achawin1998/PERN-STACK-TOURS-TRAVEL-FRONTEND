'use client'
import React, {useEffect, useRef , useState , useContext} from "react";
import "../../style/tourDetail.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import calculateAvgRating from "@/app/utils/avgRating";
import Booking from "@/app/components/Booking/Booking";

// hook for fetch data
import { BASE_URL } from "@/app/utils/config";

// fecth data for user can review on tours
import { AuthContext } from "@/app/Context/AuthContext";

// img for proflie reviews
const avatar = '../../images/avatar.jpg';

function TourDetails({ params }) {
  
  const id = params.id;
  const [tour , setTour] = useState(''); // show  singletour
  const [reviews , setReviews] = useState(); // show all reivews
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState(false)
 
  // fetch api data singletour and reviews from server 
  useEffect(() => {
    setLoading(true)
    const getData = async () => {

      const res = await fetch(`${BASE_URL}/tours/${id}`) // fetch singleTour ใช้ state tour มา map ค่า

      if (!res.ok) {
        setError("Failed to fetch data")
        return
      }

      const result =  await res.json()
      setTour(result.data.tour)
    }

    const getReviews = async () => {

      const res = await fetch(`${BASE_URL}/tours/${id}`) // fetch all reviews ใช้ state reviews มา map ค่า

      if (!res.ok) {
        setError("Failed to fetch data")
        return
      }
      
      const result =  await res.json()
      setReviews(result.data.reviews)
    }

      getData();
      getReviews()
      window.scroll(0, 0)
      setLoading(false)
  } , [])

     // useref && useState
     const reviewMsgRef = useRef(''); 
     const [tourRating , setTourRating] = useState(null) // เก็บค่า rating

     const {user} = useContext(AuthContext); // ดึงค่า user หลังจากถูก login มาใช้
    
     //submit review
    const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value.trim(); // เก็บค่าช่อง comment review

    try {
        if (!user || user === undefined || user === null) {
            alert("Please sign in before submit review.");
            return;
        }

        if (!reviewText && !tourRating) {
            alert('Please select rating star and type some review before submit.');
            return;
        }

        if(!reviewText) {
          alert('Please type some review before submit.');
          return
        }

        if (!totalRating) {
          alert('Please select rating star before submit.');
          return
        }

        const reviewObj = { // ส่งข้อมูลไปยัง server 
            username: user?.username,
            review_text: reviewText,
            rating: tourRating
        };

        console.log('Sending review object:', reviewObj);

        const res = await fetch(`${BASE_URL}/review/${id}`, { // fetch api for post review
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(reviewObj)
        });

        if (!res.ok) {
            const errorData = await res.json();
            alert('Failed to submit review: ' + errorData.message);
            console.log('Error response from server:', errorData);
            return;
        }

        alert('Review submitted');
        window.location.reload();
    } catch (error) {
        alert(error.message);
        console.error('Error submitting review:', error);
    }
  }
     // ฟังชันคำนวนตัวเลข reviews จากหน้า utiles
     const { totalRating, avaRating } = calculateAvgRating(reviews);

  return (
    <section>
      <Container>

        {error && (<h4 className="text-center">{error}</h4>)}

        {loading ? (<h4 className="text-center">Loading.......</h4>) :
        (
        <Row>
          <Col lg="8">
            <div className="tour___content">
              <img src={tour?.photo} />
  
              <div className="tour__info">
                <h2>{tour?.title}</h2>
  
                <div className="d-flex align-items-center gap-5">
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i
                      className="ri-star-fill"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>
                    {avaRating === 0 ? null : avaRating}
                    {totalRating === 0 ? (
                      "Not rated"
                    ) : (
                      <>
                        <span>({reviews?.length})</span>
                      </>
                    )}
                  </span>
  
                  <span>
                    <i className="ri-map-pin-user-fill"></i> {tour?.address}
                  </span>
                </div>
  
                <div className="tour__extra-details">
                    <span>
                        <i className="ri-map-pin-2-line"></i> {tour?.city}
                    </span> 
  
                    <span>
                        <i className="ri-money-dollar-circle-line"></i> ${tour?.price} / per person
                    </span>
  
                    <span>
                    <i className="ri-map-pin-time-line"></i> {tour?.distance} k/m
                    </span>
  
                    <span>
                        <i className="ri-group-line"></i> {tour?.maxgroupsize} people
                    </span>
                 
                </div>
                <h5>Description</h5>
                <p>{tour?.description}</p>
              </div>
  
                    {/* tour reviews section */}
                <div className="tour__reviews mt-4">
                     <h4>Reviews ({reviews?.length} reviews)</h4>   
  
                     <Form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                            <span onClick={() => setTourRating(1)}> 1 <i className="ri-star-fill"></i></span>
                            <span onClick={() => setTourRating(2)}> 2 <i className="ri-star-fill"></i></span>
                            <span onClick={() => setTourRating(3)}> 3 <i className="ri-star-fill"></i></span>
                            <span onClick={() => setTourRating(4)}> 4 <i className="ri-star-fill"></i></span>
                            <span onClick={() => setTourRating(5)}> 5 <i className="ri-star-fill"></i></span>
                        </div>
  
                        <div className="review__input">
                            <input type="text" ref={reviewMsgRef}  placeholder="Share your thoughts" required/>
                            <button className="btn primary__btn" type="submit">
                                Submit
                            </button>
                        </div>
                     </Form>
  
                     <ListGroup className="user__reviews">
                        {reviews?.map(reviews => (
                            <div className="review__item" key={reviews.id}>
                                <img src={avatar} />
  
                                <div className="w-100">
                                    <div className="d-flex align-items-center justify-content-between">
                                       <div>
                                            <h5>{reviews?.username}</h5>
                                            <p>{new Date(reviews?.created_at).toLocaleDateString('en-US')}</p>
                                       </div>  
                                        <span className="d-flex align-items-center">
                                          {reviews?.rating}<i className="ri-star-s-fill"></i>
                                        </span>
                                    </div>
                                    <h6>{reviews?.review_text}</h6>
                                </div>
                            </div>  
                        ))}
                     </ListGroup>
                </div>
                    {/* tour reviews section end */}
            </div>
          </Col>
  
          <Col lg='4'>
                <Booking tour={tour} avaRating={avaRating}  reviews={reviews} meow={tour.title}  />
          </Col>
        </Row>
        )}
        
      
      </Container>
    </section>
  );
}

export default TourDetails;

 