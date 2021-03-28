import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());

// const rootCall = (req, res) => res.send('Thank You Very Much');
const users = ['minhaj', 'ANIKA', 'sadik', 'ahmed', 'joynul', 'maria', 'sajon', 'tanisha'];
app.get('/', (req, res) => {
    // res.send('Thank You For Calling Me Minhaj!');
    // res.send('I know how to run node... YEY');
    const fruit = {
        product: 'banana',
        price: 2001
    }
    res.send(fruit);
});

app.get('/fruits/banana', (req, res) => {
    res.send({ fruits: 'banana', quantity: 1000, price: 10000 });
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    // console.log(req.query.sort)
    const name = users[id];
    res.send({id, name});
})

app.listen(3000 , () => console.log('Runing Port:3000'))