const createListing = (category, name, price, quantity) =>
    fetch("https://student-marketplace-seanmuf.herokuapp.com/api/listing", {
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
    fetch("https://student-marketplace-seanmuf.herokuapp.com/api/listings/" + category)
        .then(response => response.json())

const deleteListing = (listing) =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/listings/${listing.id}` , {
        method: 'DELETE'
    }).then(response => response.json())

const findAllListings = () =>
    fetch("https://student-marketplace-seanmuf.herokuapp.com/api/listings").then(response => response.json())

export default {
    createListing,
    deleteListing,
    findAllListingsByCategory,
    findAllListings
}