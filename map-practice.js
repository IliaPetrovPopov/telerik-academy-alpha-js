const books = [
    {title: '1984', author: 'George Orwell', pages: 328},
    {title: 'Fahrenheit 451', author: 'Ray Bradbury', pages: 256},
    {title: 'Brave New World', author: 'Aldous Huxley', pages: 311},
    {title: 'The Handmaid\'s Tale', author: 'Margaret Atwood', pages: 311},
];

const getBookInfo = function(book) {
    let bookString = '';

    for (let key in book) {
        bookString += book[key] + ',' + " ";
    }

    return bookString.slice(0, -2);
}

const booksInfo = books.map(book => getBookInfo(book));

console.log(booksInfo);