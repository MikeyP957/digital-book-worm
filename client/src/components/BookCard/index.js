import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../../App.css'



export default function BookCard(props) {
   return (
            <Card className="book-card" style={{ width: '75rem' }}>
            
            <Card.Body>
              <Card.Header className ='card-title'>
                <h3>
                {props.title}
                </h3>              
              <h5>By: {props.authors.join(" & ")} </h5>
              </Card.Header>
              <Card.Img variant="top" src={props.image || "https://www.fillmurray.com/320/180" } />
              <Card.Text>
              
                <br/>
                {props.description}
              </Card.Text>

            </Card.Body>
          </Card>
               
  )  
}