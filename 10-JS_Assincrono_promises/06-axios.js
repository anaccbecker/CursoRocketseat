// rodar pelo codesandbox
import axios from "axios";

const url = "https://api.github.com/users/anaccbecker";

// axios.get(url)
//   .then(res => {
//     console.log(res.data)
//   })
//   .catch(error => console.log(error))

//   axios.get(url)
//   .then(res => {
//     const user = res.data
//     axios.get(user.repos_url)
//     .then(repos => {
//       console.log(repos.data)
//     })
//     .catch(error => console.log(error))
//   })
//   .catch(error => console.log(error))

axios
  .get(url) //  lê a resposta da url
  .then((res) => axios.get(res.data.repos_url)) // lê o conteúdo da resposta
  .then((repos) => console.log(repos.data)) // imprime o conteúdo da resposta
  .catch((error) => console.log(error)); // pega erro
