const createBuyer = (uid) =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/buyers/register`, {
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


export default {
    createBuyer
}