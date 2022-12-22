
const url = 'http://localhost:5500/api'

function getUsers(){
 fetch(url)
 .then(response => response.json())
 .then(data => renderApiResult.textContent = JSON.stringify(data))
 .catch(error => console.error(error))
}

function getUser(id){
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser){
    fetch(url, {
        method:"POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type":"application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => alert.textContent = data)
    .catch(err => console.error(err))
}


function updateUser(updatedUser, id){
    fetch(`${url}/${id}`, {
        method:"PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type":"application/json; charset=UTF-8"  
        }
    })
    .then(res => res.json())
    .then(data => alert.textContent = data)
    .catch(err => console.error(err))
}

function deleteUser(id){
    fetch(`${url}/${id}`, {
        method:"DELETE",
        headers: {
            "Content-type":"application/json; charset=UTF-8"  
        }
    })
    .then(res => res.json())
    .then(data => alert.textContent = data)
    .catch(err => console.error(err))
}

const newUser = {
    id: 2,
    name: "Gus",
    avatar: "https://avatars.githubusercontent.com/u/42896862?v=4",
    city: "Curitiba"
}

const updatedUser ={
    name: "Clóvis",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"

}

//updateUser(updatedUser,51)
//addUser(newUser)

// for (let i = 2; i<76; i++){
//     deleteUser(i)
// }


getUsers()
getUser(76)