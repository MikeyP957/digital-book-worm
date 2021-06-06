import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../../App'



export default function Header(props) {
   return (
            <Card className='header-card' style={{ width: '30rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Header>
                <h2>
                Google Books Search
                </h2>                
              </Card.Header>
              <Card.Text>
                <h5>
                A place to search for books and save for future reading.
                </h5>
              </Card.Text>

            </Card.Body>
          </Card>
               
  )  
}