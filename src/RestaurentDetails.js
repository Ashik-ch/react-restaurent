import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsondata from "./res.json";
import {Row,Col,ListGroup,Image} from 'react-bootstrap/esm'

function RestaurentDetails() {
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    setData(jsondata.restaurants);
  }, []);

  console.log("ALL DATAS:", data);
  console.log("PARAMS:", params.id);

  const details = data.find((i) => i.id == params.id);

  console.log("filtered DatA: ", details);

  return (
    <>
    {
        details?(
            <Row>
                <Col md={3}>
                    <Image className='img p-4' src={details.photograph1} alt={details.name} style={{height: '400px', width: '400px'}}></Image>
                </Col>
                <Col md={4} className='m-auto p-3'>
                    <ListGroup>
                        <ListGroup.Item>
                            <h2>{details.name}</h2>
                            <p>{details.description}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>{details.item}</h2>
                            <p>cuisine type: {details.cuisine_type}</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3} className='p-3'>
                    <ListGroup.Item>
                        <h4>Operating Hours</h4>
                        <p>Monday: {details.operating_hours.Monday}</p>
                        <p>Tuesday: {details.operating_hours.Tuesday}</p>
                        <p>Wednesday: {details.operating_hours.Wednesday}</p>
                        <p>Thursday: {details.operating_hours.Thursday}</p>
                        <p>Friday: {details.operating_hours.Friday}</p>
                        <p>Saturday: {details.operating_hours.Saturday}</p>
                        <p>Sunday: {details.operating_hours.Sunday}</p>
                    </ListGroup.Item>
                </Col>
            </Row>
        ): 'null'
    }
    </>



  )


  
}

export default RestaurentDetails;
