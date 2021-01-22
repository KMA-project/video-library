import axios from "axios";
const url = "https://4b72ea8aff65.ngrok.io/api";
const backUp = "https://5dc9138dd53a7d00149cebd0.mockapi.io/api"; 
export default function callAPI(
  endpoint,
  method = "GET",
  body,
  header = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "cache-control": "no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
    //   "authorization": `Bearer ${getCookies({name: "user_token"})}`,
    }
) {
  return new Promise((resolve, reject) => {
      axios({
       url: `${url}/${endpoint}`,
       method,
       headers: header,
       data: body,
     })
       .then(response => {
         console.log(response);
         resolve(response);
       })
       .catch(error => {
           reject({message: error})
       });
  })
}

 
// .json?auth=aMW7qulLyOD0hkmWzHOsaP13yxeXQYjjkWoIH2k5

// &auth=aMW7qulLyOD0hkmWzHOsaP13yxeXQYjjkWoIH2k5 


