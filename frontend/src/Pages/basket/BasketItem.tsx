import React from 'react'
import {Row, Col, Container,Image} from "react-bootstrap"
import {CarsInterface} from "../../interfaces/interfaces"

interface Props extends CarsInterface {
   
}

const BasketItem: React.FC<Props> = ({name_car, Carimgs, price, model, year}) => {
  return (
   <>
   <Row className='p-3'>
    <Col md={3}><Image src={Carimgs[0].url} width={200} height={100}></Image></Col>
    <Col md={6}>
        <div><strong>{name_car}</strong></div>
    </Col>
    <Col md={3}>
        <div><strong>Preço</strong></div>
    </Col>
   </Row>
   </>
  )
}

export default BasketItem