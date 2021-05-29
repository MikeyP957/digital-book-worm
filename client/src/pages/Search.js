import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import BookCard from '../components/BookCard'
import Button from 'react-bootstrap/Button'

export default function Search() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    // const [savedBook, setSaved] = useState({})


    function searchHandler(e) {
        //the api takes words with the primary letter in each word capitalized
        const mySentence = query;
        console.log(mySentence)
            //this regex takes the first letter of each word and capitalizes it.
        const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        console.log(finalSentence)


        API.googleBook(finalSentence)
            .then((response) => setData(response.data.items))

        console.log(data)
    }

    function someSaveFunction(e) {
        console.log('some save function...')
    }
  
    (data[0]) ? console.log('data[0] is something', data[0]): console.log('its nothing...')
    return(     
         
        <div>
            <div>

                <input type= "text" onChange={event => setQuery(event.target.value)}/>
                <Button onClick= {searchHandler} >Search</Button>
            </div>
            {data.length ? (
                <div className='container row'>
                    {data.map((book) => (
                        <div>
                        <BookCard 
                            key= {book.id}
                            title= {book.volumeInfo.title}
                            
                            authors = {book.volumeInfo.authors}
                            description = {book.volumeInfo.description}
                        />
                        <Button variant="primary">View Description</Button>
                        <Button onClick= {someSaveFunction} variant="primary">Save Book to Library</Button>
                        </div>
                    ))}
                </div>
            ) : (
                <h4>Search for a book!</h4>
            )}
        </div>               
    )

}

// image={book.volumeInfo.imageLinks.thumbnail}
