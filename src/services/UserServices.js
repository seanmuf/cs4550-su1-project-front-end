const findUserById = (uid) =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/users/${uid}`, {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())

const register = (username, password, userType) =>
    fetch("https://student-marketplace-seanmuf.herokuapp.com/api/register", {
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
    fetch("https://student-marketplace-seanmuf.herokuapp.com/api/login", {
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

const fetchProfile = () =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/profile`, {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())



const logout = () =>
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/logout`, {
        method: 'POST',
        credentials: "include"
    }).catch(response => response.json())

const updateUser = (username, password, fname, lname, email, userType, currentUser) => {
    fetch(`https://student-marketplace-seanmuf.herokuapp.com/api/profile/${currentUser.id}` , {
        method: 'PUT',
        body: JSON.stringify({
            username: username,
            password: password,
            f_name: fname,
            l_name: lname,
            email: email,
            userType: userType
        }, currentUser),
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