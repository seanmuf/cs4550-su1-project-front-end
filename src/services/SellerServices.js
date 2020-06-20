
const createSeller = () =>
    fetch(`http://localhost:8080/api/sellers`, {
        method: 'POST',
        credentials: "include"
    })
        .then(response => response.json())

export const fetchSellerProfile = (username, password) =>
    fetch(`http://localhost:8080/api/profile/seller`, {
        method: 'POST',
        body: JSON.stringify(username, password),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())
        .catch(e => {
            this.props.history.push("/login")
        })
        .then(currentUser => {
            if(currentUser)
                this.props.history.push("/profile")
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
    createSeller,
    fetchSellerProfile,
    createListing,
    deleteListing,
    updateListing,
    findListingsForSeller,
}