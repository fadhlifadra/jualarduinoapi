const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//route
app.get('/', (req, res) => {
    res.send('we are on home');
});

//connect to db

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('connected to db');
    })

//listening the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});