import React, {useState, useEffect} from 'react';
import API from '../utils/API';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BookCard from '../components/BookCard';
import Row from 'react-bootstrap/Row';


function Saved () {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect( async () => {

      const fetchData = async () => {
        setLoading(true);
        const { data } = await API.getBooks()

        setBooks(data)
        console.log(data, "some books perhaps....")
        setLoading(false)
      }

      fetchData()
     
      console.log(books.data, "Some books...perhaps")
    },[])

    return(
      <Container>
        {books.length ? (
          <div className="container row" loading="lazy">
            {books.map((aBook) => (
              <BookCard
              key={aBook._id}
              authors= {aBook.authors}
              title= {aBook.title}
              description={aBook.description}
              />
              
            )

            )}
          </div>
        ) : (
          <div>
            <h6>It appears you have saved 0 books.</h6>
          </div>
        ) }
      </Container>
    )


}
export default Saved

