import React from 'react'
import './common-section.css'
import { Container , Row , Col } from 'reactstrap'

function CommonSection({title}) { // export ไปใช้กับ หน้าที่ต้องการแสดงหัวข้อ เช่น Page tours , tourSearch
  return (
    <section className='common__section'>
        <Container>
            <Row>
                <Col lg='12'>
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommonSection