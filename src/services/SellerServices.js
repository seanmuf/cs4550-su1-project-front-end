
const createSeller = (uid) =>
    fetch(`http://localhost:8080/api/sellers/register`, {
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
    fetch(`http://localhost:8080/api/seller`, {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())

const createListing = (sid, listing) =>
    fetch(`http://localhost:8080//api/sellers/${sid}/listings`, {
        method: 'POST',
        body: JSON.stringify(listing),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteListing = (lid) =>
    fetch(`http://localhost:8080/api/listings/${lid}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

const updateListing = (lid, updateListing) =>
    fetch(`http://localhost:8080/api/listings/${lid}`, {
        method: 'PUT',
        body: JSON.stringify(updateListing),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const findListingsForSeller = (sid) =>
    fetch(`http://localhost:8080/api/sellers/${sid}/listings`)
        .then(response => response.json())

export default {
    createSeller,
    fetchSeller,
    createListing,
    deleteListing,
    updateListing,
    findListingsForSeller,
}