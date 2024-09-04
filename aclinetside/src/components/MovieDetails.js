import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchMovie = async () => {
            const res = await axios.get(`http://localhost:4002/api/movies/${id}`);
            setMovie(res.data);
        };
        fetchMovie();
    }, []);

    return (
        <Container>
            <h2>{movie.name}</h2>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.file} />
                <Card.Body>
                    <Card.Text>Duration: {movie.duration}</Card.Text>
                    <Card.Text>Price: {movie.unitPrice}</Card.Text>
                    <Card.Text>Tickets Available: {movie.tickets}</Card.Text>
                    <Card.Text>Description: {movie.description}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default MovieDetails;
