/*
Suppose you want to find your favourite movie. Write an arrow function where it will take three parameters:


1) name of the movie, movieTitle, a string
2) year of the movie, movieYear, a number
3) array of movies, arrOfMovies, array of objects

The array of movies will have the properties title, director and year. From the arrayOfMovies, you will have to find the movie (object) that matches with the movieTitle and movieYear and return it as shown below:
    
*/

const movies = [
    {
        title: 'Star Wars',
        director: 'George Lucas',
        year: 1977
    },

    {
        title: 'The  Dark Knight',
        director: 'Christopher Nolan',
        year: 2008
    }
];
const findTheMovie = (movieTitle, movieYear, arrOfMovies) => {
    return arrOfMovies.find(movie => movie.title === movieTitle && movie.year === movieYear);
}
console.log(findTheMovie('The  Dark Knight', 2008, movies)); // { title: 'The  Dark Knight', director: 'Christopher Nolan', year: 2008 }

const number = 15555801;
function numOfDigits(num) {
    let count = 0;
    while (num >= 0) {
        count++;
        num = num / 10;
        if(num < 1) {
            break;
        }

    }
    return count;
}

console.log(numOfDigits(number)); // 8