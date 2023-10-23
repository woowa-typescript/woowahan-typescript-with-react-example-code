const MOVIE_TITLE = Symbol("title");
const MUSIC_TITLE = Symbol("title");
console.log(MOVIE_TITLE === MUSIC_TITLE); // false

let SYMBOL: unique symbol = Symbol(); // A variable whose type is a 'unique symbol'
// type must be 'const'
