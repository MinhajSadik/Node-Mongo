import express from 'express';
import cors from 'cors';
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

get.post('/adUser', (req, res) => {
    console.log(post.body);
})

app.listen(3000 , () => console.log('Runing Port:3000'))