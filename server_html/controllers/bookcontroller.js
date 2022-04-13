const bookSc = require("../models/book");

exports.getAllBooks = (req, res, next) => {
    bookSc.find({}, (error, bookSc1) =>{
        if (error) next(error);
        req.data = bookSc1;
        next();
    });
};