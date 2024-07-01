'use client'
import React from 'react'
import { Container , Row , Col } from 'reactstrap'
import Link from 'next/link'
import '../style/thank-you.css'

function Thankyou() {
  return (
    <section className='thankyou'>
        <Container>
            <Row>
                <Col lg='12' className='pt-4 text-center'>
                    <div className='thank__you'>
                        <span><i className="ri-checkbox-circle-line"></i></span>
                        <h1 className='mb-3 fw-semibold'>Thank You</h1>
                        <h3 className='mb-4'>Your tour is booked.</h3>
                        <button className='btn_thankyou'><Link href={'/home'}>Back to home</Link></button>
                     </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Thankyou