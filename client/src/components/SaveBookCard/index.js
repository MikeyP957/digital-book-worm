import React, {useState} from 'react';
import Wrapper from '../Wrapper'
import API from '../../utils/API';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../../App.css'


export default function SaveSearchedBook(props) {
    const [savedBook, setSaved] = useState(false);

    function handleSave(aBook) {
        console.log(aBook)
        API.saveBook(aBook)
            .then(setSaved(true))
            .catch(err => console.log(err))
    }

    return(
      <Col className="mt-4" xs={12} sm={8} md={8} lg={4}>     
        <Card className="book-card" style={{ width: '75rem' }}>
            
            <Card.Body>
              <Card.Header className='card-title'>
                <h3> {props.title} </h3>
                <h5>By: {props.authors.join(" & ")} </h5>
                <Button variant="secondary" onClick= {() => !savedBook && handleSave({
                    title: props.title,
                    authors: props.authors,
                    description: props.description,
                    imageLink: props.image
                    
                    })
            } >Save book to Library</Button>
              </Card.Header>              
              <Card.Text>  
              {props.description}                                             
              </Card.Text>            
              <Card.Img fluid variant="top"  src={props.image} />
               
            <br/>
            </Card.Body>
        </Card>
      </Col>
         
    )
}



