const createCart = (bid) =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/${bid}/carts`, {
        method: 'POST',
        credentials: "include"
    })
        .then(response => response.json())

const fetchCart = () =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/cart`, {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())

const findAllCartListings = () =>
    fetch("https://student-marketplace-seanmuf.herokuapp.com/api/cart/listings").then(response => response.json())

const addToCart = (category, name, price, quantity, cid) =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/${cid}/carts`, {
        body: JSON.stringify({
            l_category: category,
            l_name: name,
            l_price: price,
            l_quantity: quantity
        }),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST'
    }).then(response => response.json())


export default {
    createCart,
    fetchCart,
    findAllCartListings,
    addToCart
}