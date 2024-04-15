const express = require("express");
const bodyParser = require("body-parser");

const loginRoutes = require("./login");
const messageRoutes = require("./message");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(loginRoutes);
app.use(messageRoutes);


app.use((req, res) => {
    res.status(404).send("Page Not Found!");
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})