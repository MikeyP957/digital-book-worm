import React, {useState} from 'react';
import Wrapper from '../Wrapper'
import API from '../../utils/API';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function SaveSearchedBook(props) {
    const [savedBook, setSaved] = useState(false);

    function handleSave(book) {
        console.log(book)
        API.saveBook(book)
            .then(setSaved(true))
            .catch(err => console.log(err))
    }

    return(     
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                {props.authors}                                
              </Card.Text>
            {props.description}
             <Button onClick= {() => !savedBook && handleSave({
                    title: props.title,
                    authors: props.authors,
                    description: props.description
                    })
            } >Save book to Library</Button>
            </Card.Body>
        </Card>
         
    )
}



