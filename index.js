const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Program 6 - Docker Automated Build Pipeline");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
