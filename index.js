import express from 'express';
// const express = require('express');
import cors from 'cors';
// const cors = require('cors');
import bodyParser from 'body-parser';
// const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());


// const rootCall = (req, res) => res.send('Thank You Very Much');
const users = ['minhaj', 'ANIKA', 'sadik', 'ahmed', 'joynul', 'maria', 'sajon', 'tanisha'];
app.get('/', (req, res) => {
    // res.send('Thank You For Calling Me Minhaj!');
    const fruit = {
        product: 'banana',
        price: 2001
    }
    res.send(fruit);
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    // console.log(req.query.sort)
    const name = users[id];
    res.send({id, name});
})

// post
app.post('/addUser', (req, res) => {
    // save to database
    const user = req.body;
    user.id = 545;
    res.send(user);
})

app.listen(545 , () => console.log('Server Runing On Port:545'))