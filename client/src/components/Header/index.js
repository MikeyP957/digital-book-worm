import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



export default function Header(props) {
   return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Title>Google Books Search</Card.Title>
              <Card.Text>
                A place to search for books and save for future reading.
              </Card.Text>

            </Card.Body>
          </Card>
               
  )  
}