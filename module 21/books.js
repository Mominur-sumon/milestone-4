/*
Suppose you want to read books that were published in the year above 2000.



Write an arrow function that will take an array of books as a function parameter. Each book(object) will have the properties title, author and year. You will have to filter out the books that have the year greater than 2000 and return the books in an array as shown below:

*/

const books = [
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
    },

    {
        title: 'Harry Potter and the Philosopher Stone',
        author: 'J.K. Rowling',
        year: 1997
    },

    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        year: 2008
    }
]

const findBooks = (arrOfBooks) => {
    return arrOfBooks.filter(book => book.year > 2000);
  }

console.log(findBooks(books)); // [{ title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 }]

