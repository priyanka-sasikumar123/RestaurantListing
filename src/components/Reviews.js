import React from 'react'
import Card from 'react-bootstrap/Card';

function Reviews({rev}) {
  return (
   rev.map(item=>(
    <Card style={{ width: '18rem' }} className="border m-4">
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
        <Card.Text>
         Rating:{item.rating}
        </Card.Text>
        <Card.Text>
         Commands:{item.comments}
        </Card.Text>
      </Card.Body>
    </Card>
   ))
  )
}

export default Reviews