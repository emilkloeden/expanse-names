"use strict";

function randomFromArray(array) {
    var length = array.length;
    var randomIndex = Math.floor(Math.random() * length);
    return array[randomIndex];
}

module.exports = {
    randomFromArray: randomFromArray
};