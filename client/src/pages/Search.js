import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import SaveBookCard from '../components/SaveBookCard'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button'
import '../App.css'

export default function Search() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
   
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
 

    return(         
        <div>
            <Header />
            <div>

                <input type= "text" onChange={event => setQuery(event.target.value)}/>
                <Button onClick= {searchHandler} >Search</Button>
            </div>
            {data.length ? (
                <div className='container row'>
                    {data.map((book) => (
                        <div>
                        <SaveBookCard
                            key={book.id}
                            authors = {book.volumeInfo.authors}
                            title={book.volumeInfo.title}
                            description = {book.volumeInfo.description}
                            image={book.volumeInfo.imageLinks.thumbnail}
                        />

                        </div>
                    ))}
                </div>
            ) : (
                <h4>Search for a book!</h4>
            )}
        </div>               
    )
}

