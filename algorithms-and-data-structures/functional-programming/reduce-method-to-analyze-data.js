//recreate an array the will hold a list of IMDB rating which you will use later of find the average ratting on the movies

//iterate over the watchList Array

//find if the person who directed is Christopher Nolan 

// if it is not move on to thr next one

// if it is add it to the array 

// find thr sum of the imdb rating array and divide it by the arrays length 

function getRating(watchList) {
   
   const directedByChris = watchList.filter((movie) => movie.Director === "Christopher Nolan");
   
   const stringsToNumbers = Number(...directedByChris);
   
   const sumOfRating = stringsToNumbers.reduce((sum, movie) => sum + movie.Director, 0 );
   
   return sumOfRating / directedByChris.length;
}