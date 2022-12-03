// rodar pelo codesandbox

const url = "https://api.github.com/users/anaccbecker";

// // tradicional
// fetch(url) //  lê a resposta da url
//   .then((response) => response.json()) //  transforma a resposta em json
//   .then((data) => fetch(data.repos_url)) // lê o conteúdo da resposta
//   .then((res) => res.json()) // transforma o conteúdo da resposta em json
//   .then((d) => console.log(d)) // imprime o json
//   .catch((err) => console.log(err)); // pega erro

// com async await
async function start (){
  const user = await fetch(url).then(r=>r.json())
  const repos = await fetch (user.repos_url).then(r=>r.json())
  console.log(repos)
}

start().catch((err) => console.log(err))