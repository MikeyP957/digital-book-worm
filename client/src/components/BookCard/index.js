import React, { Component } from 'react';
import API from '../../utils/API';
import Card from '../Card';
import { Row, Col, Container } from '../Grid';
import Wrapper from '../Wrapper';

export default class BookCard extends Component {
    state = {
        loading: true,
        books: null
    }

    async componentDidMount() {
        const { data } = await API.getBooks();
        this.setState({ books: data.results, loading: false })

        console.log(data.results);
    }

    savedBooks(props) {
        if(this.state.loading || !this.state.books) {
            return (
                <div>Loading...</div>
            )
        }

        return(
            <Wrapper>
                {this.state.books
                .map((books) => (
                    <Card
                    key= {books.isbn}
                    text1= {books.title}
                    image= {books.thumbnail}
                    text2= {books.authors.join(' , ')}
                    text3= {books.description}
                    />
                ))}
            </Wrapper>
        )
    }
}
