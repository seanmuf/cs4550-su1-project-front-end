const createStore = (sid) =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/${sid}/stores`, {
        method: 'POST',
        credentials: "include"
    })
        .then(response => response.json())

const fetchStore = () =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/store`, {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())

const findAllStoreListings = () =>
    fetch("https://student-marketplace-seanmuf.herokuapp.com/api/store/listings").then(response => response.json())

const addToStore = (category, name, price, quantity, sid) =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/${sid}/stores`, {
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
    createStore,
    fetchStore,
    findAllStoreListings
}