const bookSc = require("../models/book");

exports.getAllBooks = (req, res, next) => {
    bookSc.find({}, (error, bookSc) =>{
        if (error) next(error);
        req.data = bookSC;
        next();
    });
};