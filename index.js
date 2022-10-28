const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const course = require('./data/course.json');

app.use(cors());
app.get('/', (req, res) => {
    res.send('News API Running');
});

app.get('/news-categories', (req, res) => {
    res.send(categories);
})

app.get('/course', (req, res) =>{
    res.send(course);
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_course = course.filter( cc => cc.id === id);
    res.send(category_course);
})


app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find( c => c.id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('Learning Server running on port', port);
})