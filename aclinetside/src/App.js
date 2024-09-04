// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ManageMovies from './components/ManageMovies';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import EditMovie from './components/EditMovie';
import AddMovie from './components/AddMovie'; 

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/add-movie" element={<AddMovie />} /> 
                <Route path="/" element={<Home />} />
                <Route path="/manage-movies" element={<ManageMovies />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
                <Route path="/manage-movies/edit/:id" element={<EditMovie />} />
                <Route path="/add-movie" element={<AddMovie />} /> 
            </Routes>
        </Router>
    );
};

export default App;
