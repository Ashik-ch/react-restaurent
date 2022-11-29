import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Restaurent from './Restaurent'
import resdata from './res.json'

function Dashboard() {
  const [data, Setdata] = useState([])
  const testData = async () => {
    await fetch('./res.json')
      .then((res) => res.json())
      .then((dta) => Setdata(dta.Restauent))
  }
  useEffect(() => {
    // testData()
    Setdata(resdata.restaurants)
  }, [])
  console.log("DATA", data);
  return (
    <Row>{

      data.map((item => (
        <Col sm={12} md={8} lg={6} xl={3}>
          <Restaurent item={item} />
        </Col>
      )))
    }
    </Row>
  )
}



export default Dashboard
