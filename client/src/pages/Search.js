import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import BookCard from '../components/BookCard'
import Button from 'react-bootstrap/Button'

export default function Search() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [nothing, thisisnothing]= useState([])

  

    // useEffect((book) => {
    //     API.getBooks(book)
    //         .then((response) => response.json())
    //         .then((json) => console.log(json))
    // },[])

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
  
    (data[0]) ? console.log('data[0] is something', data[0]): console.log('its nothing...')
        return(     
         
            <div>
            <div>

                <input type= "text" onChange={event => setQuery(event.target.value)}/>
                <Button onClick= {searchHandler} >Search</Button>
            </div>
             {data.length ? (
             <div>
            <BookCard title= {data[0].volumeInfo.title}
                      image={data[0].volumeInfo.imageLinks.thumbnail}
                      authors = {data[0].volumeInfo.authors[0]}
                      description = {data[0].volumeInfo.description}
            
            />
            </div> 
             ) : (
                <h4>Search for a book!</h4>
             )
             }   

        </div>               
    )

}