require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const jokesdata = [
    {
        id: 1,
        title: "this is the title1",
        joke: "This is the joke 1"
    },
    {
        id: 2,
        title: "this is the title2",
        joke: "This is the joke 2"
    },
    {
        id: 3,
        title: "this is the title3",
        joke: "This is the joke 3"
    },
    {
        id: 4,
        title: "this is the title4",
        joke: "This is the joke 4"
    },
]
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/api/jokes', (req, res) => {
    res.send(jokesdata);
})
app.get("/twitter", (req, res) => {
    res.send("@amruthesh1610")
})
app.get("/login", (req, res) => {
    res.send('<h1> please login at app </h1>')
})
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})