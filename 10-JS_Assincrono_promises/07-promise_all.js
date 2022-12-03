// rodar pelo codesandbox
import axios from "axios";

Promise.all([
  axios.get("https://api.github.com/users/anaccbecker"),
  axios.get("https://api.github.com/users/anaccbecker/repos")
])
  .then((res) => {
    console.log(res[0].data.login);
    console.log(res[1].data.length);
  })
  .catch((err) => console.log(err.message));
