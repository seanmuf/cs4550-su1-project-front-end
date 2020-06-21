const createBuyer = (uid) =>
    fetch(`http://localhost:8080/api/buyers/register`, {
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