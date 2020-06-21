const createListing = (category, name, price, quantity) =>
    fetch("http://localhost:8080/api/listing", {
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

const findAllListingsByCategory = (category) =>
    fetch("http://localhost:8080/api/listings/" + category)
        .then(response => response.json())

const deleteListing = (listing) =>
    fetch(`http://localhost:8080/api/listings/${listing.id}` , {
        method: 'DELETE'
    }).then(response => response.json())

const findAllListings = () =>
    fetch("http://localhost:8080/api/listings").then(response => response.json())

export default {
    createListing,
    deleteListing,
    findAllListingsByCategory,
    findAllListings
}