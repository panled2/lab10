const mongoose = require("mongoose"),
bookSchema = mongoose.Schema({
    name: String, 
    author: String,
    web: String
});
module.exports = mongoose.model("bookSc", bookSchema);