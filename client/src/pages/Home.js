import React, {useState, useEffect} from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../App.css'

export default function Home() {
    return(
        <Container className="main-page">
        <h2>Welcome to the Digital Book Worm App</h2>
        <h4>Seach for books using the Google API in on the search page, or view your saved books on the saved page.</h4>
      </Container>
    )
}