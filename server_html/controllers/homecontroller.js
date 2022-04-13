exports.initialReq = (req,res) => {
    res.render("home");
};

exports.parambook = (req,res) => {
    let booknum = req.params.bookNumber;
    if (booknum == 1) {
        res.render("book1");
    };
    if (booknum == 2) {
        res.render("book2");
    }
    if (booknum == 3) {
        res.render("book3");
    };
};