
const findProductsByKeyWord = (keyword) =>
    fetch('')
        .then(response => response.json())