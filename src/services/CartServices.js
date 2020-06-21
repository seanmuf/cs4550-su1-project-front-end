const createCart = (bid) =>
    fetch(`http://localhost:8080/api/${bid}/carts`, {
        method: 'POST',
        credentials: "include"
    })
        .then(response => response.json())


export default {
    createCart
}