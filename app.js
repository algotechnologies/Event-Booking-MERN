const express = require('express');
const bodyParser = require('body-parser');


const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT;

const graphqlAPI = require('./routes/graphql');

// DB Config
const db = require('./config/keys').mongoURI;

app.use(bodyParser.json());
    
// Connect to Mongo
mongoose
.connect(db)
.then(() => console.log('MongoDB is connected'))
.catch(err => console.log(err));

// Use Routes
app.use('/graphql', graphqlAPI);

app.listen(port, () => console.log(`Server started on port ${port}`));