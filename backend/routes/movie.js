const express = require('express');
const auth =require('../middlewares/auth')
const Movie = require('../models/Movie');
const router = express.Router();

// Add a new movie
router.post('/', auth, async (req, res) => {
    const { name, duration, description, unitPrice, tickets, file, category, language, showTimings, theatre } = req.params;
    try {
        const newMovie = new Movie({ name, duration, description, unitPrice, tickets, file, category, language, showTimings, theatre });
        const movie = await newMovie.save();
        res.json(movie);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get a single movie by ID
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params._id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Update a movie
router.put('/:id', auth, async (req, res) => {
    const { name, duration, description, unitPrice, tickets, file, category, language, showTimings, theatre } = req.body;
    try {
        const movie = await Movie.findById(req.params._id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        movie.name = name || movie.name;
        movie.duration = duration || movie.duration;
        movie.description = description || movie.description;
        movie.unitPrice = unitPrice || movie.unitPrice;
        movie.tickets = tickets || movie.tickets;
        movie.file = file || movie.file;
        movie.category = category || movie.category;
        movie.language = language || movie.language;
        movie.showTimings = showTimings || movie.showTimings;
        movie.theatre = theatre || movie.theatre;

        await movie.save();
        res.json(movie);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Delete a movie
router.delete('/:id', auth, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params._id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        await movie.remove();
        res.json({ message: 'Movie removed' });
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
