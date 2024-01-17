const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use((req, res, next) => {
    res.html = file => {
        res.sendFile(`./public/${file}`, { root: __dirname });
    };
    next();
});

// routes
app.use(require("./routes"));

// entrypoint
app.listen(port, async () => {
    const db = require("./db").authenticate();

    console.log(`Hosting on https://127.0.0.1:${port}/`);

    await db;

    console.log("Connected to database!");
});
