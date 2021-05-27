import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import BookCard from '../components/BookCard'
import Button from 'react-bootstrap/Button'

export default function Search() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

  

    // useEffect((book) => {
    //     API.getBooks(book)
    //         .then((response) => response.json())
    //         .then((json) => console.log(json))
    // },[])

    function searchHandler(e) {
        const mySentence = query;
        console.log(mySentence)
        
        const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        console.log(finalSentence)


        API.googleBook(finalSentence)
            .then((response) => setData(response))

        console.log(data)
        // const columns = rows[0] && Object.keys(rows[0]);
        
        // return (

        //     rows.filter((row) => columns.some((column) => row[column].toString().toLowerCase().indexOf(query.toString()) > -1          
        //     ))

        //     )
        

    }


    return(
        <div>
            <div>

                <input type= "text" onChange={event => setQuery(event.target.value)}/>
                <Button onClick= {searchHandler} >Search</Button>
            </div>
                
            <div>
            <BookCard title= {data.title}
                      image={data.image}
                      description = {data.discription}
            
            />
            </div>
        </div>
    )
}