// rodar pelo codesandbox


const url = "https://api.github.com/users/anaccbecker"

// resposta da página
fetch(url)
  .then(response => console.log(response))

// resposta do conteúdo

// lê a url
  fetch(url)
  //  lê a resposta da url
  .then(response => {
    // transforma a resposta em json
    response.json()
      // lê o conteúdo da resposta
      .then(data => {
        fetch(data.repos_url)
          // transforma o conteúdo da resposta em json
          .then(res => res.json()
            // imprime o json
            .then(d => console.log(d)))
      }
      );
  }
)

// escrito de forma mais agradável
fetch(url)//  lê a resposta da url
  .then(response => response.json())//  transforma a resposta em json
  .then(data => fetch(data.repos_url))// lê o conteúdo da resposta
  .then(res => res.json())// transforma o conteúdo da resposta em json
  .then(d => console.log(d))// imprime o json
  .catch(err => console.log(err)) // pega erro
