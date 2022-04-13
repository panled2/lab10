const mongoose = require("mongoose");
const bookSc = require("./models/book");
const bookcontroller = require("./controllers/bookcontroller");
const homeController = require("./controllers/homecontroller");
const express = require("express"), 
app= express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
    express.urlencoded({
        extended: false
    })
);



require("dotenv").config();
const uri = process.env.ATLAS_URI;

console.log(uri);

mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
})

app.get('/', (req,res)=>{
    res.render('home')
});

app.get("/home", homeController.initialReq);
app.get("/books/:bookNumber", homeController.sendBook);

app.get(
    "/booksc",
    bookcontroller.getAllBooks,
    (req, res,next) =>{
        console.log(req.data);
        res.send(req.data);});

app.listen(app.get("port"), ()=>{
    console.log(`Server running at http://localhost:${app.get("port")}`);
});