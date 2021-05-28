import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



export default function BookCard(props) {
   return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                {props.authors}
                <br/>
                {props.description}
              </Card.Text>
              <Button variant="primary">{props.btn1}props1</Button>
              <Button variant="primary">{props.btn2}props 2</Button>
            </Card.Body>
          </Card>
       
        
  )  
}