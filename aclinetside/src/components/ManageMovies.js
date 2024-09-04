import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageMovies = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await axios.get('http://localhost:4002/api/movies');
            setMovies(res.data);
        };
        fetchMovies();
    }, []);

    const handleEdit = (id) => {
        navigate(`/manage-movies/edit/${id}`);
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:4002/api/movies/${id}`, {
            headers: { 'x-auth-token': token }
        });
        setMovies(movies.filter((movie) => movie._id !== id));
    };

   

    return (
        <Container>
            <h2>Manage Movies</h2>
           
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Duration</th>
                        <th>Price</th>
                        <th>Tickets</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie._id}>
                            <td>{movie.name}</td>
                            <td>{movie.duration}</td>
                            <td>{movie.unitPrice}</td>
                            <td>{movie.tickets}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleEdit(movie.id)}>Edit</Button>
                                <Button variant="danger" onClick={() => handleDelete(movie.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageMovies;
