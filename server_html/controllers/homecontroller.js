exports.initialReq = (req,res) => {
    res.render("home");
};

exports.sendBook = (req,res) => {
    const book =req.params.book;
    res.render(book);
}