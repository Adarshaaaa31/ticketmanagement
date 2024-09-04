import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [movies, setMovies] = useState([]) ;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await axios.get('http://localhost:4002/api/movies');
            setMovies(res.data);
        };
        fetchMovies();
    }, []);

    const handleViewDetails = (id) => {
        navigate(`/movies/${id}`);
    };

    return (
        <Container>
            <h2>Most Booked Movies</h2>
            <div className="d-flex flex-wrap">
                {movies.map((movie) => (
                    <Card key={movie._id} style={{ width: '18rem', margin: '10px' }}>
                        <Card.Img variant="top" src={movie.file} />
                        <Card.Body>
                            <Card.Title>{movie.name}</Card.Title>
                            <Button variant="primary" onClick={() => handleViewDetails(movie._id)}>
                                View Details
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default Home;
