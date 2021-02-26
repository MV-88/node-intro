const express = require('express');
const app = express();
// console.dir(app);

// app.use((req, res) => {
//     console.log('We have a new request, again');
//     res.send('<h1>This is my webpage!</h1>');
// })

app.get('/', (req, res) => {
    res.send('This is the homepage');
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on ${subreddit} subreddit`);
})

app.post('/cats', (req, res) => {
    res.send('post request to /cats!!!!')
})

app.get('/cats', (req, res) => {
    res.send('Meow Meow Meow Meow');
})

app.get('/dogs', (req, res) => {
    res.send('Woof!');
})
// /cats => 'meow'
// /dogs => 'woof'
// '/'
app.get('/search', (req, res) => {
    const { q } = req.query
    res.send(`<h1>Search results for ${q}</h1>`);
})

app.get('*', (req, res) => {
    res.send("I don't know that path!");
})



app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})

// 