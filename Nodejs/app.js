const express = require('express');

const app = express();

app.use(express.json());

app.post("/user", (req, res) => {
    const { password, username } = req.body;
    if (!password || !username) {
        res.sendStatus(400);
        return
    }
    res.send({ userId: 0 });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app; 
