// //require express to run our server/send data
// //------similar to imports in React
// import * as express from 'express';
// import apiRouter from "./routes";

// const app = express();

// // parses incoming requests to json
// app.use(express.json());


// //since server.ts is entry point, this line tells the computer
// //that we want to use functionality in the "index.js" of the routes
// //folder when user goes to 'localhost:3000/api'
// app.use('/api', apiRouter);

// app.listen(3000, () => console.log('App listening on port 3000'));

/*****/


import * as express from "express";
import * as path from "path";
import apiRouter from "./routes";

const app = express();


app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);
app.use(express.static("public"));
// app.use("*", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")))

app.listen(3000);