
const findProductsByKeyWord = (keyword) =>
    fetch("https://amazon-price1.p.rapidapi.com/search?keywords=" + keyword + "&marketplace=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "amazon-price1.p.rapidapi.com",
            "x-rapidapi-key": "7928a2dcbfmsh5d89e8852c7289fp10f848jsnf45f27536d87"
        }
    })
        .then(response => response.json())

const findProductById = (productId) =>
    fetch("https://amazon-price1.p.rapidapi.com/search?keywords=" + productId + "&marketplace=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "amazon-price1.p.rapidapi.com",
            "x-rapidapi-key": "7928a2dcbfmsh5d89e8852c7289fp10f848jsnf45f27536d87"
        }
    })
        .then(response => response.json())

export default {
    findProductsByKeyWord,
    findProductById
}