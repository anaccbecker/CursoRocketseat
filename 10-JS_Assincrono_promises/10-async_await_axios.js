// rodar pelo codesandbox


import axios from 'axios'

const url = "https://api.github.com/users/anaccbecker";

async function fetchRepos(){
  try{
    const user = await axios.get(url)
    const repos = await axios.get(user.data.repos_url)
    console.log(repos.data)
  } catch(e){
    console.log(e)
  }
}
fetchRepos()

axios
   .get(url)
   .then(response => axios.get(response.data.repos_url))
   .then (repos => console.log(repos.data))
   .catch(e => console.log(e))