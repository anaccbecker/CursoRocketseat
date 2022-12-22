const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(err => console.error(err))
}


function addNewUser(newUser){
    axios.post(url, newUser)
    .then(res => {
        console.log(res);
    })
    .catch(err => error(err))
}

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userID.textContent = response.data.id
        userAvatar.src = response.data.avatar
    })
    .catch(err => error(err))
}

function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`,userUpdated)
    .then(res => console.log(res))
    .catch(err => error(err))
}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(res => console.log(res))
    .catch(err => error(err))
}

const newUser = {
    name:"Gus",
    avatar: "https://picsum.photos/200/200",
    city: "Sao Paulo"
}

const userUpdated = {
    name:"Novo Usuário",
    avatar: "https://picsum.photos/500/500",
    city: "Recife"
}

getUsers()
// for (let i = 2; i<=31; i++){
//     deleteUser(i)
// }
//addNewUser(newUser)
updateUser(3, userUpdated)
//getUser(2)



