// src/components/AddMovie.js
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
    const [movie, setMovie] = useState({
        name: '',
        duration: '',
        description: '',
        unitPrice: '',
        tickets: '',
        category: '',
        file: ''
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie((prevMovie) => ({
            prevMovie, {name}: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        await axios.post('http://localhost:4002/api/movies', movie, {
            headers: { 'x-auth-token': token },
        });
        navigate('/');
    };

    return (
        <Container>
            <h2>Add Movie</h2>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
                    <Form.Label>Movie Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={movie.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control
                        type="text"
                        name="duration"
                        value={movie.duration}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="description"
                        value={movie.description}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="unitPrice">
                    <Form.Label>Unit Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="unitPrice"
                        value={movie.unitPrice}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="tickets">
                    <Form.Label>Tickets</Form.Label>
                    <Form.Control
                        type="number"
                        name="tickets"
                        value={movie.tickets}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        name="category"
                        value={movie.category}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Save Movie
                </Button>
            </Form>
        </Container>
    );
};

export default AddMovie;
