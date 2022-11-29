import React from 'react'
import { Card } from 'react-bootstrap'
function Restaurent({ item }) {
    console.log("ITEM", item);

    return (

        <Card className='my-3 p-3 rounded cards' style={{ width: '18rem', height: '46rem' }}>
            <Card.Img variant='top' src={item.photograph1} />
            <Card.Body>
                <Card.Title>    {item.name}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
            </Card.Body>
        </Card >
    )
}

export default Restaurent