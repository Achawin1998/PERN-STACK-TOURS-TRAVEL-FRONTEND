import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import './service-List.css'
 
// รูปภาพต่าง ๆ 
const wearherImg = './images/weather.png'
const guideImg = './images/guide.png'
const customizationImg = './images/customization.png'
 
const servicesData = [
    {
        imgUrl: wearherImg,
        title: 'Calculate Weather',
     },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
 
    },
    {
        imgUrl: customizationImg,
        title: 'Reliable and Safe',
 
    }
]

function ServiceList() {  // export ไปใส่ใน section 2 
  return (
    <div className='serviceList-flex'>
        {servicesData.map((item , index) => (
            <Col  key={index}>
                <ServiceCard item={item} />
            </Col>
        ))}
    </div>
  )
}

export default ServiceList