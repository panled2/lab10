const Book = require("../models/book");

exports.initialReq = (req,res) => {
    res.render("home");
};

exports.sendReqParam= (req,res) =>{
let booknum = req.params.bookNumber;
if (booknum == 1) {
    var bookQuery = Book.findOne({
        name: "American Dirt",
    });
    bookQuery.exec((error, data) => {
        if (data) res.render("book1", {bookSc1: data});
    });
}
else if (booknum == 2) {
    var bookQuery = Book.findOne({
        name: "The Future's Not Ours To See",
    });
    bookQuery.exec((error, data) => {
        if (data) res.render("book2", {bookSc1: data});
    });
}
else if (booknum == 3) {
    var bookQuery = Book.findOne({
        name: "The Judge's List",
    });
    bookQuery.exec((error, data) => {
        if (data) res.render("book3", {bookSc1: data});
    });
}
else {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode} | The page does not exist!`);
};
};