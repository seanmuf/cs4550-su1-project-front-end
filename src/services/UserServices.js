const findUserById = (uid) =>
    fetch(`http://localhost:8080/users/${uid}`, {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())

const register = (username, password, userType) =>
    fetch("http://localhost:8080/api/register", {
        body: JSON.stringify({
            username: username,
            password: password,
            userType: userType
        }),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())

const login = (username, password) =>
    fetch("http://localhost:8080/api/login", {
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())

const fetchProfile = (username, password) =>
    fetch(`http://localhost:8080/api/profile`, {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())



const logout = () =>
    fetch(`http://localhost:8080/api/logout`, {
        method: 'POST',
        credentials: "include"
    }).catch(response => response.json())

const updateUser = (username, password, fname, lname, email, userType, userId) => {
    fetch(`http://localhost:8080/api/profile/${userId}` , {
        method: 'PUT',
        body: JSON.stringify({
            username: username,
            password: password,
            f_name: fname,
            l_name: lname,
            email: email,
            userType: userType
        }),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    }).then(response => response.json())

}




export default {
    findUserById,
    register,
    fetchProfile,
    login,
    logout,
    updateUser
}