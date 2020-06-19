
const registerSeller = () =>
    fetch(`http://localhost:8080/api/register/seller`, {
        method: 'POST',
        credentials: "include"
    })
        .then(respose => {
            return respose.json()
        })

const fetchProfile = () =>
    fetch(`http://localhost:8080/api/profile/seller`, {
        method: 'POST',
        credentials: "include"
    })
        .then(response => {
            return response.json()
        })

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
    registerSeller,
    fetchProfile,
    createListing,
    deleteListing,
    updateListing,
    findListingsForSeller,
}