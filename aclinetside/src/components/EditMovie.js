import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const EditMovie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({
        name: '',
        duration: '',
        description: '',
        unitPrice: '',
        tickets: '',
        category: '',
    });
    

    useEffect(() => {
        const fetchMovie = async () => {
            const res = await axios.get(`http://localhost:4002/api/movies/${id}`);
            setMovie(res.data);
        };
        fetchMovie();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie((prevMovie) => ({
            prevMovie, {name}: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        await axios.put(`http://localhost:4002/api/movies/${id}`, movie, {
            headers: { 'x-auth-token': token },
        });
        navigate('/manage-movies');
    };

    return (
        <Container>
            <h2>Edit Movie</h2>
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
                    Save Changes
                </Button>
            </Form>
        </Container>
    );
};

export default EditMovie;
