const createCart = () =>
    fetch(`http://localhost:8080/api/carts`, {
        method: 'POST',
        credentials: "include"
    })
        .then(response => response.json())

export default {
    createCart
}