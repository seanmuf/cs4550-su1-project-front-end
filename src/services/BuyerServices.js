const createBuyer = (buyerId, cartId) =>
    fetch(`http://localhost:8080/api/buyers`, {
        body: JSON.stringify({
            cart_id: cartId,
            id: buyerId
        }),
        method: 'POST',
        credentials: "include"
    })
        .then(response => response.json())


export default {
    createBuyer
}