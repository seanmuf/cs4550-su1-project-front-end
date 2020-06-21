const createCart = (bid) =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/${bid}/carts`, {
        method: 'POST',
        credentials: "include"
    })
        .then(response => response.json())


export default {
    createCart
}