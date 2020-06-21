const createCart = (cid, bid) =>
    fetch(`http://localhost:8080/api/carts`, {
        body: JSON.stringify({
            id: cid,
            buyer_id: bid
        }),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        credentials: "include"
    })
        .then(response => response.json())

export default {
    createCart
}