const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.get("/api/users", (req, res) => {
    let friends = ['Nitin', 'Eric', "Jeddy", 'Cameron', 'Riley'];
    res.status(200).send(friends);
})

app.get("/weather/:temperature", (req, res) => {
    const {temperature} = req.params
    const phrase = `it was ${temperature} today`
    res.status(200).send(phrase);
})

app.listen(4000, () => console.log("server running on port 4000"));