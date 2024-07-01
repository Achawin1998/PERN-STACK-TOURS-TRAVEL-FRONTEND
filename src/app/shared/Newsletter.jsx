'use client'
import React, { useRef } from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'

function Newsletter() { // export ไปใช้ หน้า home 

    const subscribe = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!subscribe.current.value) {
            alert('Please fill you email')
            return
        } else {
            alert('Thank you for subscribe')
            subscribe.current.value = ''
        }
    }

    return (
        <section className='newsletters'>
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className='newslatter-title'>
                            <div>
                                <h3>Don&apos;t want to miss out on our many discounts, gift vouchers and promotions? </h3>
                                <h4>Apply for membership now</h4>
                                <form onSubmit={handleSubmit}>
                                    <input ref={subscribe} type='email' placeholder='Enter your email address' />
                                    <button>Subscribe now!</button>
                                </form>
                                <p>Subscribe now to get useful traveling information</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter
