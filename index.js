const express = require('express');
const cors = require('cors');
const app = express();

const courses = require('./data/courses.json');
const categories = require('./data/categories.json');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is Running...');
});

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.get('/categories', (req, res) => {
    res.json(categories);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
