var book = {
    title: "abc",
    author: "Navi",
    rating: 5,
    sales: {
        india: 100,
        abroad: 400
    }
};
var displayBook = function (_a) {
    var title = _a.title, author = _a.author;
    console.log(author);
};
var _a = book.sales, india = _a.india, abroad = _a.abroad;
displayBook(book);
