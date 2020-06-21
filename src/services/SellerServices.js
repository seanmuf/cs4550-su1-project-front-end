
const createSeller = (uid) =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/sellers/register`, {
        body: JSON.stringify({
            id: uid
        }),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        credentials: "include"
    })
        .then(response => response.json())

const fetchSeller = () =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/seller`, {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())

const createListing = (sid, listing) =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/sellers/${sid}/listings`, {
        method: 'POST',
        body: JSON.stringify(listing),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteListing = (lid) =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/listings/${lid}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

const updateListing = (lid, updateListing) =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/listings/${lid}`, {
        method: 'PUT',
        body: JSON.stringify(updateListing),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const findListingsForSeller = (sid) =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/sellers/${sid}/listings`)
        .then(response => response.json())

export default {
    createSeller,
    fetchSeller,
    createListing,
    deleteListing,
    updateListing,
    findListingsForSeller,
}