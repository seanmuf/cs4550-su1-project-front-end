
const findProductsByKeyWord = (keyword) =>
    fetch('')
        .then(response => response.json())

const findpizza = (keyword) =>
    fetch('')
        .then(response => response.json())

export default {
    findProductsByKeyWord,
    findpizza
}