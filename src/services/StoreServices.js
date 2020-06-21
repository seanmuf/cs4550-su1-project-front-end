const createStore = () =>
    fetch(`http://localhost:8080/api/stores`, {
        method: 'POST',
        credentials: "include"
    })
        .then(response => response.json())



export default {
    createStore
}