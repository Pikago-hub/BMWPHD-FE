
import auth from "../services/auth-header";

const url = "https://bmwphd-be.herokuapp.com/";

const getChangeRequests = async () => {
    console.log("in form data method api")
    // console.log(localStorage.getItem("token"));
    var token = JSON.parse(localStorage.getItem("user"));
    console.log(token.token);
     return await fetch(url + 'changeRequests', {
         method: 'GET',
         mode: 'cors',
            headers: {
              Authorization: "Bearer " + token.token,
        },
       }).then((response) => response.json());
};
  
export default {
    getChangeRequests
};