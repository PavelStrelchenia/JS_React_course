"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""),
    lastFilm = prompt("Один из полследних просмотренных фильмов?", ""),
    ratingFilm = prompt("На сколько оцените его?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        [lastFilm]: ratingFilm,
    },
    actors: {},
    genres: [],
    privat: false,
};

console.log(personalMovieDB);
