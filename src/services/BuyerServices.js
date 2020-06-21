const createBuyer = () =>
    fetch(`http://localhost:8080/api/buyers`, {
        method: 'POST',
        credentials: "include"
    })
        .then(response => response.json())


export default {
    createBuyer
}