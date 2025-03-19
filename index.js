const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const db = require('./queries');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) =>{


    res.send("Connnected");
})

app.get("/users", db.getAllUsers)

app.get("/users/:id", db.getUserById)

app.post("/users", db.createUser)

app.put("/users/:id", db.updateUser)

app.delete("/users/:id", db.deleteUser)

app.listen(port, () =>{
    console.log(`App running on port ${port}.`)
})

