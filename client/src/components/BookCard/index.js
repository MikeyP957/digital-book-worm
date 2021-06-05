import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../../App.css'



export default function BookCard(props) {
   return (
            <Card className="book-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image || "https://www.fillmurray.com/640/360" } />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                {props.authors}
                <br/>
                {props.description}
              </Card.Text>

            </Card.Body>
          </Card>
               
  )  
}