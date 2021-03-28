import express from 'express';

const app = express();

// const rootCall = (req, res) => res.send('Thank You Very Much');

app.get('/', (req, res) => {
    res.send('Thank You For Calling Me Minhaj!');
    // res.send('I know how to open node... YEY');
})

app.listen(3001 , () => console.log('listening to Port:3001'))