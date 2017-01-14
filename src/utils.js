function randomFromArray(array) {
    const length = array.length
    const randomIndex = Math.floor(Math.random() * length)
    return array[randomIndex]
}

module.exports = {
    randomFromArray
}